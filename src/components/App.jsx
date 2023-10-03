import React, { useState } from "react";
import Things from "./things";
import InputArea from "./inputArea";

function App() {
  // let array=["banana"];
  const [inputItem,setText]=useState("");
  const [item,setItem]=useState([]);



  function handleChange(event){
  const {value}=event.target;
  setText(value);
  }

  function deleteItem(index){
    console.log("deleted");
    console.log(item);
    setItem(prevValue =>{
    return prevValue.filter((obj,id)=>{
      return (id!==index)});
    // console.log(item);
    }
    )
  }
  function handleClick(){
    setItem(prevValue =>{
     return [...prevValue,inputItem];
    
  });
    setText("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea value={inputItem} handleAuxChange={handleChange} handleAuxClick={handleClick}/>
      <div>
        <ul>

        {item.map((toItems,index) =>
          <Things 
          key={index} 
          id={index}
          item={toItems} 
          onChecked={deleteItem}/>
           )}

        </ul>
      </div>
    </div>
  );
}

export default App;
