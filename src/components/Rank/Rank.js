import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">
        {`${JSON.stringify(name)}, your current entry count is...`}
      </div>
      <div className="white f1">{JSON.stringify(entries)}</div>
    </div>
  );
};

export default Rank;
