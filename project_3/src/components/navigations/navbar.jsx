import Links from "./link";

export default function Navbar() {
     return (
          <header className="fixed top-0 border-b-2 border-zinc-600/20 left-0 right-0 bg-linear-to-b from-zinc-800 to-zinc-900 flex justify-between items-center p-3">
               <div>
                    <span className="text-zinc-100 text-xl font-medium">My Blog.</span>
               </div>

               <nav>
                    <ul className="flex">
                         <li>
                              <Links path={"/"}>Home</Links>
                         </li>
                         <li>
                              <Links path={"/blog"}>Blog</Links>
                         </li>
                    </ul>
               </nav>
          </header>
     )
}