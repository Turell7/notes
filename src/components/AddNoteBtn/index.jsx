import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useNotesContext } from '../contexts/noteContext/NotesContextProvider'

export function AddNoteBtn() {
  const { addNewNote } = useNotesContext()

  const navigate = useNavigate()

  const clickHandler = () => {
    const newNote = {
      id: uuidv4(),
      title: '',
      favorite: false,
      description: '',
      picture: '',
    }

    addNewNote(newNote)

    navigate(`/notes/${newNote.id}/edit`)
  }

  return (
    <div className="ms-2">
      <button onClick={clickHandler} className="btn btn-primary" type="submit"> Add Note</button>
    </div>
  )
}
