import Navbar from "../components/navigation/navbar";

export default function About() {
     return (
          <>
               <Navbar links={[`/`, '/about', '/blog', '/contact', '/dashboard']} label={["Home", "About", "Blog", "Contact", "Dashboard"]} />
               <h1>About</h1>
          </>
     )
}