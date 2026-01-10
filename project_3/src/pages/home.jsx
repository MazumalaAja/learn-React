import { useEffect } from "react"
import PageTitle from "../components/pageTitle"
import Navbar from "../components/navigations/navbar"

export function Home() {
     return (
          <>
               <PageTitle title={"Home"} />
               <Navbar />
          </>
     )
}