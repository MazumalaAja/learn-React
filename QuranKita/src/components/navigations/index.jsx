import Links from "./navLink";

export default function Navbar() {
     return (
          <header className="z-999 fixed top-0 left-0 right-0 flex justify-between px-4 items-center py-4 bg-gray-900/50 backdrop-blur-sm border-b border-gray-600/50">
               <div>
                    <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r to-indigo-100 from-indigo-300">Quran<span>Kita</span>.</h1>
               </div>

               <nav className="text-sm">
                    <Links to={`/`} label={"Beranda"} />
                    <Links to={`/tentang`} label={"Tentang Kami"} />
                    <Links to={`/kontak`} label={"Kontak Kami"} />
               </nav>
          </header>
     )
}