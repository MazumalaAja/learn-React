import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Blog } from "../pages/blog";

export default function App() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/blog" element={<Blog />} />
          </Routes>
     )
}