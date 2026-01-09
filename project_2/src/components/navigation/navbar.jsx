import { NavLink } from "react-router-dom";

export function Navbar() {
     return (
          <header className="fixed rounded-md top-2 left-2 right-2 bg-linear-to-t from-neutral-900 to-neutral-950 flex justify-between items-center text-neutral-100 p-3 px-5 border-2 border-neutral-500/20">
               <div>
                    <h1 className="text-2xl font-medium text-neutral-200">Project Sample.</h1>
               </div>
               <nav>
                    <ul className="flex items-center gap-3">
                         <li>
                              <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/"} >Home</NavLink>
                         </li>
                         <li>
                              <NavLink to={"/blog"} >Blog</NavLink>
                         </li>
                    </ul>
               </nav>
          </header>
     )
}