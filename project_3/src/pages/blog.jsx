import { useEffect, useState } from "react";
import Navbar from "../components/navigations/navbar";
import PageTitle from "../components/pageTitle";
import { Loader } from "../components/loader";
import InputSearch from "../components/searchInput";
import { useNavigate } from "react-router-dom";

export function Blog() {
     const navigate = useNavigate();
     const [posts, setPosts] = useState([]);
     const [totalPage, setTotalPage] = useState(0);
     const [loader, setLoader] = useState(false);
     const [keyword, setKeyword] = useState("");
     const [totalPosts, setTotalPosts] = useState(false);
     const [currPage, setCurrPage] = useState(1);
     const [search, setSearch] = useState(false);
     const pageSize = 10;
     const apiKey = `fec8a20fbc1947f58919d938ed5a2e85`

     const handleClick = async (currPage, pageSize) => {
          try {
               setLoader(true);
               setSearch(true)
               if (keyword.trim() !== "") {
                    const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&page=${currPage}&pageSize=${pageSize}&apiKey=${apiKey}`);
                    if (!response.ok) throw new Error("Fetch Gagal")
                    const data = await response.json()
                    setPosts(data?.articles || []);
                    setTotalPosts(true)
               } else {
                    GetBlogApi(currPage, pageSize);
                    setTotalPosts(false)
               }
          } catch (err) {
               console.log(err.message);
          } finally {
               setLoader(false);
          }
     }

     const handleEnter = (e) => {
          if (e.key === "Enter") {
               handleClick(currPage, pageSize);
          }
     }

     const handleChange = (e) => {
          setKeyword(e.target.value)
     }

     async function GetBlogApi(currPage, pageSize) {
          try {
               setLoader(true);
               setSearch(false)
               const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${currPage}&pageSize=${pageSize}&apiKey=${apiKey}`);
               if (!response.ok) throw new Error("Fetch Gagal")
               const data = await response.json()
               let pages = Math.ceil(data.totalResults / pageSize);
               setTotalPage(pages);
               setPosts(data?.articles || []);
          } catch (err) {
               console.log(err.message);
          } finally {
               setLoader(false);
          }
     }

     useEffect(() => {
          if (!search) {
               GetBlogApi(currPage, pageSize)
          }
     }, [currPage])

     useEffect(() => {
          if (search) {
               handleClick(currPage, pageSize)
          }
     }, [search, currPage])

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

               <InputSearch onKeyDown={handleEnter} onChange={handleChange} onClick={() => handleClick(currPage, pageSize)} />

               <div>
                    {totalPosts && <span className="block my-2 text-center text-zinc-400">{posts.length !== 0 ? `Berhasil menemukan ${posts.length} artikel atau blog trekait` : `Tidak menemukan artikel dengan pencarian : ${keyword}`}</span>}
               </div>

               <div className="flex justify-center gap-3 flex-wrap p-1">
                    {posts.length !== 0 ? posts.map((v, i) => (
                         <div onClick={() => navigate(`/blog/${i + 1}`, { state: v })} key={i} className="bg-zinc-900/50 space-y-2 w-full max-w-md p-3 rounded-md text-zinc-100 border border-neutral-600/50 hover:border-indigo-500 cursor-pointer active:scale-95 duration-200">
                              <h3>{v.title}</h3>
                              <div className="flex gap-2 items-center">
                                   <small className="text-indigo-400 px-2 py-0.5 rounded-full bg-indigo-600/10">{v.publishedAt}</small>
                                   <small className="text-green-400 px-2 py-0.5 rounded-full bg-green-600/10">{v.author ?? "Unknown"}</small>
                              </div>
                              <div>
                                   <p className="text-zinc-500 text-[0.8rem]">{v.description}</p>
                              </div>
                         </div>
                    )) : null}
               </div>

               {posts.length !== 0 && <div className="flex justify-center my-3">
                    <div>
                         <button onClick={() => currPage > 1 ? setCurrPage(p => p - 1) : null} className={`${currPage <= 1 ? `text-zinc-600 outline-zinc-600` : `bg-zinc-600/10 hover:bg-indigo-600/10 hover:text-indigo-300 cursor-pointer hover:outline-indigo-300   outline-zinc-300 text-zinc-300`} py-1.5 px-4 rounded-s-md outline`}>prev</button>
                    </div>
                    <div>
                         {[...Array(totalPage)].map((_, i) => (
                              <button onClick={() => setCurrPage(i + 1)} key={i} className={`${currPage == (i + 1) ? `bg-indigo-600/10 text-indigo-300` : `bg-zinc-600/10 outline-zinc-300 text-zinc-300`}  hover:bg-indigo-600/10 hover:text-indigo-300 cursor-pointer hover:outline-indigo-300 px-4 outline  py-1.5`}>{i + 1}</button>
                         ))}
                    </div>
                    <div>
                         <button onClick={() => currPage < totalPage ? setCurrPage(p => p + 1) : null} className={`${currPage == totalPage ? `text-zinc-600 outline-zinc-600` : `bg-zinc-600/10 hover:bg-indigo-600/10 hover:text-indigo-300 cursor-pointer hover:outline-indigo-300   outline-zinc-300 text-zinc-300`} py-1.5 px-4 rounded-e-md outline`}>next</button>
                    </div>
               </div >}
          </>
     )
}