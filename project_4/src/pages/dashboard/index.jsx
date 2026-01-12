import { Outlet } from "react-router-dom";
import Navbar from "../../components/navigation/navbar";

export default function Dashboard() {
     return (
          <>
               <Navbar links={[`/`, '/about', '/blog', '/contact', '/dashboard']} label={["Home", "About", "Blog", "Contact", "Dashboard"]} />

               <Outlet />
          </>
     )
}