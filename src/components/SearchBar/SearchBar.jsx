import { AddNoteBtn } from '../AddNoteBtn'
import { Search } from '../Search/Search'

export function SearchBar() {
  return (
    <div className="d-flex justify-content-center align-items-center pb-5">
      <Search />
      <AddNoteBtn />
    </div>
  )
}
