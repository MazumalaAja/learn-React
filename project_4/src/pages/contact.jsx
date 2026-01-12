import Navbar from "../components/navigation/navbar";

export default function Contact() {
     return (
          <>
               <Navbar links={[`/`, '/about', '/blog', '/contact', '/dashboard']} label={["Home", "About", "Blog", "Contact", "Dashboard"]} />
               <h1>Contact</h1>
          </>
     )
}