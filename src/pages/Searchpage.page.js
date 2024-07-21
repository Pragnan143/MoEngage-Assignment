import React, { useState } from "react";

const Searchpage = () => {
  const [search, setSearch] = useState("");
  const handler = () => {
    console.log(search);
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-blue-100 p-20">
      <div className="flex items-center justify-center h-[50px] w-[300px]">
        <input
          type="text"
          placeholder="enter"
          className="h-[50px] w-[300px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handler}>Search</button>
      </div>
    </div>
  );
};

export default Searchpage;
