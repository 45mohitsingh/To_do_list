import React from "react";


export default function InputArea(props){
    return <div className="form">
        <input type="text" 
        onChange={props.handleAuxChange}
        value={props.value}/>
        <button>
          <span onClick={props.handleAuxClick}>Add</span>
        </button>
      </div>
}