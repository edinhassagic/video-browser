import React from "react";
// import { useState } from "react";

export default function Search({ submitHandler, setKeyword}) {
  // const [title, setTitle] = useState("");

  const onSearchChanged = (event) => {
    const _title = event.target.value;
    setKeyword(_title);
    
  };

  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-controls">
          <label>Search</label>
          <input
            
            onChange={onSearchChanged}
            id="video-search"
            type="text"
            placeholder="Enter search keyword"
          />
        </div>
      </form>
    </div>
  );
}
