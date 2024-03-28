import {React, useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content:"",
    });  

    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        // object destructuring
        const {name , value} = event.target;


        setNote((prevData) => {
            return {
                ...prevData,
                [name]:value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"", 
        })
    }

    const expandIt = () => {
        setExpand(true);
    }

    const btoNormal = () => {
        setExpand(false);
    }

    return (
        <>
            <div className='main_note' onDoubleClick={btoNormal}>
                <form action="">
                {expand ? (
                    <input 
                        type="text"
                        name="title" 
                        placeholder='Title' 
                        value={note.title} 
                        onChange={InputEvent}
                        autoComplete='off' />
                ) : null}

                    <textarea 
                        rows=""
                        column=""
                        name="content"
                        placeholder='Write a note' 
                        onClick={expandIt}
                        value={note.content} 
                        onChange={InputEvent}
                        >
                    </textarea>
                    {expand ? (
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign'/>
                    </Button>
                    ) : null}
                </form>  
            </div>
        </>
    )
}

export default CreateNote