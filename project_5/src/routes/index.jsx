import { createBrowserRouter } from "react-router"
import Home from "../pages/home"
import Contact from "../pages/about"
import About from "../pages/contact"
const router = createBrowserRouter([
     {
          path: '/',
          element: <Home />
     },
     {
          path: '/contact',
          element: <Contact />
     },
     {
          path: '/about',
          element: <About />
     }
])

export { router }