import { useLocation } from 'react-router-dom'
import { SearchBar } from '../SearchBar/SearchBar'
import { NotesList } from '../NotesList'
import stylesAside from './styles.module.scss'

export function Aside() {
  const location = useLocation()

  console.log({ location })
  return (
    <aside className={stylesAside.aside}>
      <SearchBar />
      <hr />
      <NotesList key={location.key} />
    </aside>
  )
}
