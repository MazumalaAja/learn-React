import Navbar from "../components/navigation/navbar";

export default function Blog() {
     const arr = [
          { id: "001100", title: "alskds asdlaskdjsalkd 1", content: "alskdjaslkdjaslkdjsalkjdsalkdjasldksajdklsajdklasjdkasjkasdlkasjkdjj" },
          { id: "002200", title: "alskds asdlaskdjsalkd 2", content: "alskdjaslkdjaslkdjsalkjdsalkdjasldksajdklsajdklasjdkasjkasdlkasjkdjj" },
          { id: "003300", title: "alskds asdlaskdjsalkd 3", content: "alskdjaslkdjaslkdjsalkjdsalkdjasldksajdklsajdklasjdkasjkasdlkasjkdjj" },
          { id: "004400", title: "alskds asdlaskdjsalkd 4", content: "alskdjaslkdjaslkdjsalkjdsalkdjasldksajdklsajdklasjdkasjkasdlkasjkdjj" }
     ]
     return (
          <>
               <Navbar links={[`/`, '/about', '/blog', '/contact', '/dashboard']} label={["Home", "About", "Blog", "Contact", "Dashboard"]} />
               <h1>Blog</h1>
               
          </>
     )
}