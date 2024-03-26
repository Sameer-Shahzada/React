import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './index.css';
import List from './List';
const ToDoList = () => {
    // hooks 
    const [item, setItem] = useState("")
    const [newitem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    const listOfItem = () => {
        setNewItem((prevValue) => {
            return [...prevValue, item]
        });
        setItem(" ");
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder='Add an item'
                        onChange={itemEvent}
                        value={item}
                    />
                    <Button className='newBtn' onClick={listOfItem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>

                        {newitem.map((val, index) => {
                            return <List key={index} items ={val}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default ToDoList;