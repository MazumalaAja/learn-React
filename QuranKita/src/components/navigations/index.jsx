import Links from "./navLink";

export default function Navbar() {
     return (
          <header className="z-999 fixed top-0 left-0 right-0 flex border-0 justify-between px-4 items-center py-4 bg-gray-900/50 backdrop-blur-sm md:border-b border-gray-600/50">
               <div data-aos="fade-right" data-aos-duration="500">
                    <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r to-indigo-100 from-indigo-300">Quran<span>Kita</span>.</h1>
               </div>

               {/* ===== Desktop and Tablet Navigation ===== */}
               <nav className="hidden md:flex text-sm">
                    <Links to={`/`} label={"Beranda"} />
                    <Links to={`/kontak`} label={"Kontak Kami"} />
               </nav>

               <nav className="absolute z-999 top-full w-full left-0 p-2 backdrop-blur-sm flex gap-3 flex-col bg-gray-900/50 text-sm border-gray-600/90 border-b">
                    <Links to={`/`} label={"Beranda"} />
                    <Links to={`/kontak`} label={"Kontak Kami"} />
               </nav>

               {/* ===== Toggle ===== */}
               <label for="toggle" className="md:hidden flex flex-col gap-2 cursor-pointer border-transparent border-2 rounded-md hover:border-gray-400 p-2 duration-300">
                    <input id="toggle" className="hidden peer" type="checkbox" />
                    <div className="h-0.5 w-7 bg-gray-300/80 rounded-full transition-all duration-300 peer-checked:rotate-45  peer-checked:translate-y-2.5"></div>
                    <div className="h-0.5 w-7 bg-gray-300/80 rounded-full transition-all duration-300 peer-checked:w-0"></div>
                    <div className="h-0.5 w-7 bg-gray-300/80 rounded-full transition-all duration-300 peer-checked:-rotate-45  peer-checked:-translate-y-2.5"></div>
               </label>
          </header>
     )
}