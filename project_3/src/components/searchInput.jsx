export default function InputSearch({ text, onClick, onChange, onKeyDown }) {
     return (
          <div className="flex mx-auto max-w-2xl text-zinc-200 mb-3 p-1">
               <div className=" focus-within:outline-indigo-500 w-full outline outline-zinc-400 px-3 py-1.5 rounded-s-md">
                    <input onKeyDown={onKeyDown} onChange={onChange} className="w-full focus:outline-0" type="search" placeholder={text ?? "Search..."} />
               </div>
               <button onClick={onClick} className=" active:bg-indigo-300/10 hover:bg-indigo-400/10 bg-indigo-600/10 text-indigo-400 cursor-pointer px-3 py-1.5 rounded-e-md outline outline-s-0 outline-indigo-400">Search</button>
          </div>
     )
}