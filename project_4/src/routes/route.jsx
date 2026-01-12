import { createBrowserRouter, Navigate } from "react-router-dom"
import { About, Blog, Contact, Home } from "../pages";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/dashboard/profile";
import Statistics from "../pages/dashboard/statistics";

const router = createBrowserRouter([
     {
          path: `/`,
          errorElement:<Error /> ,
          element: <Home />,
     },
     {
          path: `/about`,
          element: <About />,
     },
     {
          path: `/contact`,
          element: <Contact />,
     },
     {
          path: `/blog`,
          element: <Blog />,
     },
     {
          path: `/dashboard`,
          element: <Dashboard />,
          children: [
               { index: true, element: <Navigate to={"profile"} /> },
               {
                    path: `profile`,
                    element: <Profile />
               },
               {
                    path: `statistics`,
                    element: <Statistics />
               },
          ]
     }
])

export default router;