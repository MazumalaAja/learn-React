import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { AnimateOnScroll } from "../../libs/aos";

const router = createBrowserRouter([
     {
          path: `/`,
          element: (
               <AnimateOnScroll>
                    <Home />
               </AnimateOnScroll>
          ),
     }
])

export default router;