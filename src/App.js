import React, { useState, useEffect } from "react";
import ResultList from "./ResultList";

const App = () => {
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    const data = await fetch("https://buzf3x5qlk.execute-api.us-east-1.amazonaws.com/prod/search");
    const json = await data.json();
    setFounders(json.data);
  };

  return (
    <div className="ui text container">
      <div className="ui large header">
        PicassoMD Founders
      </div>
      <div className="ui action input">
        <input type="text" placeholder="Search" className="search" />
        <button className="ui button">Search</button>
      </div>
      <div className="results">
        <ResultList founders={founders} />
      </div>
    </div>
  );
}

export default App;
