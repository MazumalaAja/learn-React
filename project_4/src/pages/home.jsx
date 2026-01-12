import Navbar from "../components/navigation/navbar";

export default function Home() {
     return (
          <>
               <Navbar links={[`/`, '/about', '/blog', '/contact', '/dashboard']} label={["Home", "About", "Blog", "Contat", "Dashboard"]} />
               <h1>Home</h1>
          </>
     )
}