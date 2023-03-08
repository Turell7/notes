import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { useNotesByParams } from '../../customHooks/useNoteByParams'
import styles from './styles.module.scss'
import { REQUIRED_ERROR_MESSAGE } from './constants'
import { useNotesContext } from '../contexts/noteContext/NotesContextProvider'

export function NoteEdit() {
  const navigate = useNavigate()

  const currentNote = useNotesByParams()

  const { editNote } = useNotesContext()

  if (!currentNote) return <Navigate to="/" />

  const { id, favorite, ...initialValues } = currentNote

  return (
    <div>
      <h2>Editing</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(
          {
            title: Yup.string()
              .min(1, 'Must be at least 1 characters')
              .max(20, 'Must be 20 characters or less')
              .required(REQUIRED_ERROR_MESSAGE),
            description: Yup.string()
              .min(3, 'Min be 3 characters or less')
              .required(REQUIRED_ERROR_MESSAGE),
            picture: Yup.string().url()
              .min(5, 'More than 5 symbols')
              .max(800, 'Max 800 symbols')
              .required('Please set image url'),
          },
        )}
        onSubmit={(values) => {
          editNote(id, values)
          navigate(`/notes/${id}`)
        }}
      >
        <Form className={styles.editForm}>
          <Field name="title" type="text" placeholder="Title note" />
          <ErrorMessage component="span" className={styles.error} name="title" />
          <Field name="description" type="text" placeholder="Text ..." />
          <ErrorMessage component="span" className={styles.error} name="description" />

          <Field name="picture" type="text" placeholder="img-url" />
          <ErrorMessage component="span" className={styles.error} name="picture" />

          <button type="submit" className="btn btn-primary">Update</button>
        </Form>
      </Formik>
    </div>
  )
}
