import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { NoteDetail } from './components/NoteDetail'
import { NoteEdit } from './components/NoteEdit'
import { Index } from './components/Index/Index'

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'notes/:noteId',
        element: <NoteDetail />,
      },
      {
        path: 'notes/:noteId/edit',
        element: <NoteEdit />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>,
)
