import React, { useContext, useEffect, useRef ,useState} from 'react'
import Noteitem from './Noteitem';
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom'
const Notes = (props) => {
  let navigate = useNavigate()
    const context = useContext(noteContext);
    const {  notes, getNotes, editNote } = context;
    useEffect(() => {
      if(localStorage.getItem('token')){
        getNotes() 
      }else{
      navigate("/login")
      }
    // eslint-disable-next-line 
    }, [])
    const [note, setNote] = useState({id:"",etitle: "",edescription: "", etag: ""})
    const updateNote = (currentNote) =>{
      ref.current.click();
      setNote({id:currentNote._id,etitle:currentNote.title, edescription: currentNote.description,etag: currentNote.tag})

    }
    // eslint-disable-next-line
    const handleClick = (e) =>{
      editNote(note.id, note.etitle, note.edescription, note.etag);
      refClose.current.click();
      props.showAlert("Updeted successfully","success")
    // addNote(note.title, note.description, note.tage);
  }
  const onChange = (e) =>{
   setNote({...note, [e.target.name]: e.target.value})
  }
   const ref = useRef(null)
   const refClose = useRef(null)
    return (
        <>
    <AddNote showAlert={props.showAlert}/>
    {/* <!-- Button trigger modal --> */}
<button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

 {/* Modal  */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className='my-3'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" value={note.etitle} id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange} minLength={5} required/>
        </div>
        {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button> */}
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>

    <div className="row my-3">
    <h2>Your Notes</h2>
    <div className="container" >
    {notes.length===0 && 'No notes to display'}
    </div>
      {notes.map((note)=>{
        return <Noteitem key={note._id} updateNote={updateNote} showAlerta={props.showAlert} note={note}/>;
      })}
      </div>
      </>
    )
}

export default Notes
