import { useMemo } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useNotesByParams } from '../../customHooks/useNoteByParams'
import { useNotesContext } from '../contexts/noteContext/NotesContextProvider'
import noPicture from './assets/no_picture.png'
import styles from './styles.module.scss'

export function NoteDetail() {
  const currentNote = useNotesByParams()

  const { deleteNote, favoriteNote } = useNotesContext()

  const navigate = useNavigate()

  if (!currentNote) return <Navigate to="/" />

  const displayName = currentNote.title ? `${currentNote.title}` : 'Note name not specified'
  const displayPicture = currentNote.picture || `${noPicture}`

  const isFav = currentNote.favorite

  const deleteHandler = () => {
    deleteNote(currentNote.id)
    navigate('/')
  }

  const favoriteHandler = () => {
    favoriteNote(currentNote.id)
  }

  const showNoteFields = useMemo(() => {
    const {
      id, picture, title, description, favorite, ...keysFormShow
    } = currentNote

    return Object.keys(keysFormShow)
      .filter((key) => !!currentNote[key])
      .map((key) => (
        <p key={key}>
          <b>
            {key}
            :
          </b>
          {' '}
          {currentNote[key]}
        </p>
      ))
  }, [currentNote])

  return (
    <div className="d-flex">
      <div className="d-flex flex-column me-2">
        <img alt="note" className={`${styles.picture} mb-2`} src={displayPicture} />
        <button onClick={favoriteHandler} className={`btn btn-${isFav ? 'danger' : 'success'}`} type="submit">
          {isFav ? 'Not Favorite' : 'Favorite'}
        </button>
      </div>

      <div className={styles.infoBlock}>
        <h2>{displayName}</h2>
        {showNoteFields}

        <div>
          <Link className="btn btn-primary mx-2" to="edit"> Edit</Link>
          <button onClick={deleteHandler} className="btn btn-danger mx-2" type="submit"> Delete</button>
        </div>
      </div>

    </div>
  )
}
