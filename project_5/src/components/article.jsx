import { useContext } from "react"
import { GlobalContext } from "../context"

export function Article({ data }) {
     const users = useContext(GlobalContext)
     return (
          <>
               {
                    data.map((v, i) => (
                         <div key={i}>
                              <h3>{v.title}</h3>
                              <p>{users[i].name}</p>
                              <small>{v.date}</small>
                         </div>
                    ))
               }
          </>
     )
}