import React, { useEffect, useState } from "react";
import axios from "axios";
import SeenIndexes from "./components/SeenIndexes";
import CalculatedValues from "./components/CalculatedValues";

export type FibState = {
  seenIndexes: any[];
  values: any;
  index: string;
};

const Fib = () => {
  const [state, setState] = useState<FibState>({
    seenIndexes: [],
    values: {},
    index: "",
  });

  useEffect(() => {
    const fetchValues = async () => {
      const values = await axios.get("/api/values/current");
      console.log("values", values);
      setState((s) => ({ ...s, values: values.data }));
    };
    const fetchIndexes = async () => {
      const seenIndexes = await axios.get("/api/values/all");
      setState((s) => ({ ...s, seenIndexes: seenIndexes.data }));
    };

    fetchValues();
    fetchIndexes();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await axios.post("/api/values", {
      index: state.index,
    });
    setState({ ...state, index: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          type="number"
          value={state.index}
          onChange={(e) => setState({ ...state, index: e.target.value })}
        />
        <button>Submit</button>
      </form>
      <SeenIndexes data={state.seenIndexes} />
      <CalculatedValues values={state.values} />
    </div>
  );
};

export default Fib;
