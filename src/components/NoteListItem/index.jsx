import { NavLink } from 'react-router-dom'

export function NotesListItem({ title, id }) {
  return (
    <NavLink
      to={`/notes/${id}`}
    >
      {({ isActive }) => (
        <li className={`list-group-item ${isActive && 'active'}`}>
          {title || 'first'}
        </li>
      )}
    </NavLink>
  )
}
