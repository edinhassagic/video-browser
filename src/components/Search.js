import React from "react";
import { useState } from "react";



export default function Search({onSearch}) {

    const [title, setTitle] = useState("")

    const onSearchChanged = event => {
const _title = event.target.value;
setTitle(_title)

    }

    const onSubmit = event => {
        event.preventDefault();
       onSearch(title);
    }
    return (
        <div>
           <form onSubmit={onSubmit}>
               <div className="form-controls">
                 <label>Search</label>
                 <input value={title}
                 onChange={onSearchChanged}
                 id="video-search" type="text" placeholder="Enter search keyword" />

               </div>
           </form>
        </div>
    )
}
