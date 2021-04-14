import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link className="App-link" to="/">
            Home
          </Link>
          <Link className="App-link" to="/otherpage">
            Other Page
          </Link>
        </header>
        <div style={{ marginTop: "2em" }}>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
