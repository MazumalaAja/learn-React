import { NavLink } from "react-router-dom"

export default function Links({ path, children }) {
     const style = ({ isActive }) =>
          `${isActive ? `bg-zinc-900 text-zinc-100  outline outline-zinc-600` : `text-zinc-400`} px-4 py-1.5 rounded-md`;

     return (
          <NavLink className={style} to={`${path}`}>
               {children}
          </NavLink>
     )
}