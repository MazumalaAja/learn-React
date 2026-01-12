import { NavLink } from "react-router-dom";

export default function Navbar({ links, label }) {
     const active = `bg-indigo-600/10 text-indigo-400 outline-indigo-400`;
     return (
          <nav className="flex p-2 gap-2">
               {
                    links.map((v, i) => (
                         <NavLink key={i} to={v} className={({ isActive }) => `${isActive ? active : `  text-neutral-400`} outline outline-nautral-400 rounded-md px-4 py-1.5`}>
                              {label[i]}
                         </NavLink>
                    ))
               }
          </nav>
     )
}
