import React from "react";

type CalculatedValuesType = {
  values: any;
};

const CalculatedValues: React.FC<CalculatedValuesType> = ({ values }) => {
  const renderValues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }
    return entries;
  };

  return (
    <>
      <h3>Calculated Values:</h3>
      {renderValues()}
    </>
  );
};

export default CalculatedValues;
