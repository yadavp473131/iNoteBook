// import NoteContext from "./noteContext";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const s1 = {
  //     "name": "Harry",
  //     "class":"5b"
  // }
  // const [state, setState] = useState(s1)
  // const update = ()=>{
  //     setTimeout(() => {
  //         setState({
  //             "name":"Larry",
  //             "class" : "10b"
  //         })
  //     }, 1000);
  // }
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)

//Get all Notes
const getNotes = async() => {
  // API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWQzNzFiNWEzMjY3NzZhNTUyOTI1In0sImlhdCI6MTcwOTYzMjQ5MX0.MrDXrZddP4KBbOzZ7iAgTdm6cHjoEpV_cfMNNhFlBSk"
    },
  
  });
  const json = await response.json()
  console.log(json);
  setNotes(json)
}

  //Add a Note
  const addNote = async(title, description, tag) => {
    // API Call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWQzNzFiNWEzMjY3NzZhNTUyOTI1In0sImlhdCI6MTcwOTYzMjQ5MX0.MrDXrZddP4KBbOzZ7iAgTdm6cHjoEpV_cfMNNhFlBSk"
      },
      body: JSON.stringify({title, description, tag})
    });
    
    console.log("Adding a new note");
    const note = {
      "_id": "65e9f22eb870d0ed8d6f2011",
      "user": "65e1d371b5a326776a552925",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-03-07T16:58:22.798Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  //Delete a Note
  const deleteNote = async(id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWQzNzFiNWEzMjY3NzZhNTUyOTI1In0sImlhdCI6MTcwOTYzMjQ5MX0.MrDXrZddP4KBbOzZ7iAgTdm6cHjoEpV_cfMNNhFlBSk"
      }
    });
    const json = response.json();
    console.log(json);
    console.log("deleting the note with id " + id)
    
  }
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlMWQzNzFiNWEzMjY3NzZhNTUyOTI1In0sImlhdCI6MTcwOTYzMjQ5MX0.MrDXrZddP4KBbOzZ7iAgTdm6cHjoEpV_cfMNNhFlBSk"
      },
      body: JSON.stringify({title, description,tag})
    });
    // eslint-disable-next-line
    const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  // {state, update}
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;