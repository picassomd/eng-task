import React from "react";
import ResultItem from "./ResultItem";

const ResultList = ({ founders }) => {
  const items = founders.map((i) => <ResultItem item={i} key={i.id} />);

  return (
    <div className="result-container">
      {items}
    </div>
  );
};

export default ResultList;
