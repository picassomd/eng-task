import React from "react";

const ResultItem = ({ item }) => {
  return (
    <div className="result-item">
      <div className="left">
        <img src={item.image_path} alt="profile" />
        <div className="demo">
          <div>{item.first_name} {item.last_name}</div>
          <div className="title">{item.title}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
