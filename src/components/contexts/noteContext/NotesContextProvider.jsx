import { createContext, useContext } from 'react'
import { useNotes } from './useNotes'

const NoteContext = createContext()

export function NotesContextProvider({ children }) {
  const notesData = useNotes()

  return (
    <NoteContext.Provider value={notesData}>
      {children}
    </NoteContext.Provider>
  )
}

export const useNotesContext = () => useContext(NoteContext)
