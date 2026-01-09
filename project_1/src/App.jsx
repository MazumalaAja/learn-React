import "./styles/app.css"
import datas from "./api.json"
import { Search } from "./components/search"
import { useState } from "react"

function App() {
  let [data, setData] = useState(datas);
  let [keyword, setKeyword] = useState("");
  function searchInput(e) {
    const filterSearch = datas.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.trim()))
    setKeyword(e.target.value);
    setData(filterSearch);
  }

  return (
    <>
      {/* Title */}
      <h1 className="text-3xl font-medium text-neutral-100 text-center mb-3">Simple Blog</h1>

      {/* Search input */}
      <Search onChange={searchInput} />
      <span className="text-center text-neutral-300 block mb-3 text-md">{data.length <= 0 ? `Blog tidak ada atau belum tersedia` : `Berhasil menemukan ${data.length} blog terkait ${keyword.trim() == `` ? `` : `sesuai dengan pencarian ini : ${keyword}`}`}</span>

      {/* Result Data */}
      <div className="flex justify-center gap-3 flex-wrap">
        {
          data.map(({ title, mentor, date }, index) => (
            <div className="flex flex-col gap-3 max-w-md w-full bg-neutral-600/30 rounded-md p-3 px-5  hover:outline-indigo-500 hover:outline-1">
              <h2>{title}</h2>
              <small className="text-neutral-300/60">{date}</small>
              <button className=" self-end cursor-pointer active:scale-90  bg-neutral-900/50 hover:bg-neutral-900 text-neutral-100 px-3 py-1 rounded-md">view</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
