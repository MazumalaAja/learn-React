import { Route, Routes } from "react-router-dom"
import { Home, Blog, NotFound } from "../pages"
import Navbar from "../components/navigations/navbar"

export default function App() {
     return (
          <>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </>
     )
}
