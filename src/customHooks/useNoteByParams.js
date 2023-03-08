import { useParams } from 'react-router-dom'
import { useNotesContext } from '../components/contexts/noteContext/NotesContextProvider'

export const useNotesByParams = () => {
  const { noteId } = useParams()

  const { getNoteById } = useNotesContext()

  const currentNote = getNoteById(noteId)

  return currentNote
}
