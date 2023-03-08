import { useNotesContext } from '../contexts/noteContext/NotesContextProvider'
import { NotesListItem } from '../NoteListItem'

export function NotesList() {
  const { notes } = useNotesContext()

  if (!notes.length) return <div>Note list is empty</div>

  return (
    <ul className="list-group list-group-flush">
      {notes.map((note) => (
        <NotesListItem
          title={note.title}
          key={note.id}
          id={note.id}
        />
      ))}
    </ul>
  )
}
