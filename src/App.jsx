import { Outlet } from 'react-router-dom'
import './App.css'
import { Aside } from './components/Aside/Aside'
import { NotesContextProvider } from './components/contexts/noteContext/NotesContextProvider'

function App() {
  return (
    <NotesContextProvider>
      <div className="container root-container py-5">
        <Aside />
        <div>
          <Outlet />
        </div>
      </div>
    </NotesContextProvider>
  )
}

export default App
