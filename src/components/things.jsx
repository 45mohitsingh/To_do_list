import React from "react";

export default function Things (props){
    return (
        
        <div onClick={() =>{
           {props.onChecked(props.id)} 
        }}>
        <li>{props.item}</li>
        </div>
    );
}