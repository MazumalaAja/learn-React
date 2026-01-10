import { useEffect, useState } from "react";
import Navbar from "../components/navigations/navbar";
import PageTitle from "../components/pageTitle";
import { Loader } from "../components/loader";

export function Blog() {
     const [posts, setPosts] = useState([]);
     const [loader, setLoader] = useState(false);

     async function GetBlogApi() {
          try {
               setLoader(true);
               const response = await fetch("https://newsapi.org/v2/everything?q=all&apiKey=5f16badb4f8b49118588e45ec1ce422f");
               const data = await response.json()
               console.log(data.articles);
               setPosts(data?.articles);
          } catch (err) {
               console.log(err.code);
               console.log(err.message);
          } finally {
               setLoader(false);
          }
     }
     useEffect(() => {
          GetBlogApi();
     }, [])
     return (
          <>
               <PageTitle title={"Blog"} />
               <Navbar />

               {loader &&
                    <div className="bg-zinc-950/50 z-50 fixed top-0 left-0 right-0 bottom-0 gap-3 flex flex-col justify-center items-center min-h-screen">
                         <Loader />
                         <span className="text-xl text-zinc-100">Loading</span>
                    </div>
               }

               <div className="flex justify-center gap-3 flex-wrap p-1">
                    {posts.length !== 0 ? posts.map((v, i) => (
                         <div key={i} className="bg-zinc-900/50 space-y-2 w-full max-w-md p-3 rounded-md text-zinc-100 border border-neutral-600/50 hover:border-indigo-500 cursor-pointer active:scale-95 duration-200">
                              <h3>{v.title}</h3>
                              <small className="text-zinc-500">{v.publishedAt}</small>
                         </div>
                    )) : null}
               </div>
          </>
     )
}