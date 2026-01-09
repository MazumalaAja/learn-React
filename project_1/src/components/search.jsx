export function Search({ onChange }) {
     return (
          <div className="group focus-within:border-indigo-400 flex justify-center my-5 gap-3 max-w-xl mx-auto p-2 px-4 rounded-md border border-neutral-100/50">
               <i className="group-focus-within:text-indigo-400 bi bi-search"></i>
               <input className="w-full focus:outline-0 " type="search" placeholder="Search..." onChange={onChange} />
          </div>
     )
}