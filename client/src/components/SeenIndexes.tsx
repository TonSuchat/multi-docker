import React from "react";

type SeenIndexesType = {
  data: any[];
};

const SeenIndexes: React.FC<SeenIndexesType> = ({ data }) => {
  const renderSeenIndexes = () => {
    return data.map(({ number }) => number).join(", ");
  };

  return (
    <>
      <h3>Indexes I have seen: </h3>
      {renderSeenIndexes()}
    </>
  );
};

export default SeenIndexes;
