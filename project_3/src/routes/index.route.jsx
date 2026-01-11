import { Route, Routes } from "react-router-dom"
import { Home, Blog, NotFound } from "../pages"
import BlogDetail from "../pages/blogDetail"

export default function App() {
     return (
          <>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route path="*" element={<NotFound />} />
               </Routes>
          </>
     )
}
