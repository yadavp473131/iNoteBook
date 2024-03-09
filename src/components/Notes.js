import React, { useContext, useEffect, useRef ,useState} from 'react'
import Noteitem from './Noteitem';
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
const Notes = () => {
    const context = useContext(noteContext);
    const {  notes, getNotes } = context;
    useEffect(() => {
    getNotes() 
    // eslint-disable-next-line 
    }, [])
    const [note, setNote] = useState({etitle: "",edescription: "", etag: ""})
    const updateNote = (currentNote) =>{
      ref.current.click();
      setNote({etitle:currentNote.title, edescription: currentNote.description,etag: currentNote.tag})
    }
    // eslint-disable-next-line
    const handleClick = (e) =>{
      console.log("Updateing the note..",note)
      e.preventDefault();
    // addNote(note.title, note.description, note.tage);
  }
  const onChange = (e) =>{
   setNote({...note, [e.target.name]: e.target.value})
  }
   const ref = useRef(null)
    return (
        <>
    <AddNote/>
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
          <input type="text" className="form-control" value={note.etitle} id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="edescription" value={note.edescription} name="edescription" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="etag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="etag" value={note.etag} name="etag" onChange={onChange}/>
        </div>
        {/* <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button> */}
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>

    <div className="row my-3">
    <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <Noteitem key={note._id} updateNote={updateNote} note={note}/>;
      })}
      </div>
      </>
    )
}

export default Notes
