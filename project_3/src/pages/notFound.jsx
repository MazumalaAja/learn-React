import notFoundPng from "../assets/images/notFound_2.png"

export function NotFound() {
     return (
          <>
               <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col gap-3 justify-center items-center p-3">
                    <h2 className=" text-md sm:text-2xl  md:text-3xl text-zinc-100">Page Not Found</h2>
                    <img className="w-full max-w-xl bg-zinc-950/30 p-5 rounded-lg" src={notFoundPng} alt="" />
               </div>
          </>
     )
}