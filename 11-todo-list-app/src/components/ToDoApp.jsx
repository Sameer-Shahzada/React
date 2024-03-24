import React from 'react';
import { useState } from "react";
import ToDoLists from './ToDoLists';
import './ToDoApp.css';

const ToDoApp = () => {
 // hooks
 const [inputList, setInputList] = useState("");
 const [items, setItems] = useState([]);

 const itemEvent = (event) => {
   setInputList(event.target.value);
 }

 const listOfItems = () => {
   setItems((oldItems) => {
     return [...oldItems, inputList]
   })
   setInputList('');
 }

 const deleteItems = (id) => {
   console.log("deleted");

   setItems((oldItems => {
     return oldItems.filter((arrElem,index) => {
       return index !== id;
     })
   } ))
};

 return (
   <>
     <div className="main_div">
       <div className="center_div">
         <br />
         <h1> ToDo List </h1>
         <br />
         <input type="text" placeholder="Add an item" onChange={itemEvent} value={inputList} />
         <button onClick={listOfItems}> + </button>

         <ol>
           {/* <li>{inputList}</li> */}

           {items.map((itemval, index) => {
             return <ToDoLists
             key={index} 
             id={index} 
             text={itemval} 
             onSelect = {deleteItems} 
             />
           })}
         </ol>
       </div>
     </div>
   </>
 );
}

export default ToDoApp;