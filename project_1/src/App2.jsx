import { useEffect } from "react"
import "./styles/app.css"

export default function App2() {
     function sayHello() {
          console.log("Hello");
     }
     useEffect(() => {
          sayHello();
     })

     return (
          <>
               <h2 className="text-2xl text-center">Belajar useEffect</h2>
          </>
     )
}

