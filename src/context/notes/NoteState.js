// import NoteContext from "./noteContext";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
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
    const notesInitial = [
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
        {
        "user": "65e1d371b5a326776a552925",
        "title": "mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "_id": "65e9f22eb870d0ed8d6f2003",
        "date": "2024-03-07T16:58:22.798Z",
        "__v": 0
      },
    ]
      const [notes, setNotes] = useState(notesInitial)
    // {state, update}
    return (
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;