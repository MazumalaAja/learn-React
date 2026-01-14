import { useState } from "react";
import { Article } from "../components/article";
import data from "../data.json"
import { GlobalContext } from "../context";

export default function Home() {
     const [datas, setDatas] = useState(data)
     const users = [
          { name: "Zumal", age: 23 },
          { name: "Aldo", age: 22 },
          { name: "Rama", age: 25 },
          { name: "fahri", age: 24 },
     ]
     return (
          <>
               <h2>Home</h2>
               <GlobalContext.Provider value={users}>
                    <Article data={datas} />
               </GlobalContext.Provider>
          </>
     )
}