// PostingBoard.jsx
import React from "react";
import List from "./List";
import Filters from "./Filters";

const PostingBoard = () => {
  return (
    <div className="flex flex-1">
      <div className="w-[25%] ">
        <Filters />
      </div>
      <div className="w-[75%] mr-2">
        <List />
      </div>
    </div>
  );
};

export default PostingBoard;
