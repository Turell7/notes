import { useEffect, useState } from 'react'

const NOTES_LS_KEY = 'notes_ls_key'

export function useNotes() {
  const [notes, setNotes] = useState(() => {
    const notesFormLS = window.localStorage.getItem(NOTES_LS_KEY)

    return notesFormLS ? JSON.parse(notesFormLS) : []
    // return preparedData
  })

  useEffect(() => {
    window.localStorage.setItem(NOTES_LS_KEY, JSON.stringify(notes))
  }, [notes])

  const addNewNote = (newNotes) => {
    setNotes((prev) => [newNotes, ...prev])
  }

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  const favoriteNote = (id) => {
    setNotes((prev) => prev.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          favorite: !note.favorite,
        }
      }
      return note
    }))
  }

  const editNote = (id, newNoteInfo) => {
    setNotes((prev) => prev.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          ...newNoteInfo,
        }
      }
      return note
    }))
  }

  const getNoteById = (id) => notes.find((note) => note.id === id)

  console.log({ notes })

  return {
    notes,
    addNewNote,
    getNoteById,
    deleteNote,
    editNote,
    favoriteNote,
  }
}
