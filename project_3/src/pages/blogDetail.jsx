import { useLocation, useParams } from "react-router-dom"
import Navbar from "../components/navigations/navbar";
import { useEffect } from "react";

export default function BlogDetail() {
     const { state } = useLocation();
     return (
          <>
               <Navbar />
               <div className=" flex flex-col mx-auto w-full max-w-3xl gap-3">
                    <div className="">
                         <h1 className="font-medium text-xl md:text-2xl text-center text-zinc-300">{state.title}</h1>
                    </div>
                    <div className="flex gap-3 justify-center p-1">
                         <small className="text-[0.7rem] md:text-sm bg-indigo-600/10 text-indigo-400 px-4 py-1.5 rounded-full">{state.author ?? "Unknown"}</small>
                         <small className="text-[0.7rem] md:text-sm bg-green-600/10 text-green-400 px-4 py-1.5 rounded-full">{state.publishedAt}</small>
                    </div>

                    <div className="p-1">
                         <img className="rounded-md" src={`${state.urlToImage}`} alt="" />
                    </div>

                    <div className="p-1">
                         <p className="text-sm sm:text-lg md:text-xl text-zinc-300">{state.content}</p>
                    </div>

                    <div className="mt-3 p-1">
                         <a target="_blank" className="bg-indigo-600/10 block  text-indigo-300 px-2 p-1 text-[0.8rem] md:text-sm md:px-5 md:py-2 rounded-full border border-indigo-300 active:scale-95 text-center" href={`${state.url}`}>Baca Selengkapnya...</a>
                    </div>
               </div>
          </>
     )
}