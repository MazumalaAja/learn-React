import Navbar from "../components/navigations";

export default function Home() {
     // ===== Data Untuk perulangan =====
     const data = [
          { icon: `bi bi-book`, title: `Baca Al-Quran`, text: `Teks Arab, transliterasi, dan terjemahan bahasa Indonesia` },
          { icon: `bi bi-soundwave`, title: `Audio Berkualitas`, text: `Teks Arab, transliterasi, dan terjemahan bahasa Indonesia` },
          { icon: `bi bi-lightbulb`, title: `Tafsir Lengkap`, text: `Memahami makna dengan tafsir yang mudah dipahami` }
     ]
     return (
          <>
               {/* ===== Navbar ===== */}
               <Navbar />

               {/* ===== First Section ===== */}
               <section className="bg-[url(./src/resources/images/04.jpg)]  bg-no-repeat bg-cover p-20 flex flex-col gap-5 items-center h-screen w-full">

                    {/* ===== Title ===== */}
                    <span className="text-xl rounded-full border border-indigo-200/20 backdrop-blur-sm bg-indigo-400/10 px-10 py-1.5 text-indigo-100">Al-Qur'an Digital Anak Bangsa</span>
                    <div className="max-w-4xl space-y-3">
                         <h1 className="text-5xl text-center font-semibold text-indigo-100">Platform Baca Al-Qur'an Online</h1>
                         <p className="text-xl text-gray-300/60  text-center">Baca, dengarkan, dan pelajari Al-Quran dengan terjemahan Indonesia, audio 6 qari terbaik, tafsir lengkap</p>
                    </div>

                    {/* ===== Tombol CTA ===== */}
                    <div className="flex gap-3">
                         <button className="bg-indigo-500/10 shadow-md border active:scale-90 border-indigo-200/20 text-xl text-indigo-50 backdrop-blur-sm px-10 cursor-pointer hover:bg-indigo-200 hover:text-gray-700 py-3 hover:scale-95 rounded-full flex justify-center items-center gap-3 duration-300">
                              <i className="bi bi-journal"></i>
                              <span className="">Ayo Mulai!</span>
                         </button>
                    </div>

                    {/* ===== Card ===== */}
                    <div className="flex flex-wrap gap-3 justify-center">
                         {
                              data.map((v, i) => (
                                   <div key={i} className="bg-indigo-500/10 shadow-md hover:translate-y-[-3%] duration-300 space-y-2 backdrop-blur-sm text-indigo-100 text-center max-w-[20rem] p-3 border border-indigo-200/20 rounded-lg">
                                        <i className={`${v.icon} block max-w-max mx-auto text-4xl bg-indigo-300/20 px-4 py-2 rounded-md`}></i>
                                        <h2 className="text-xl font-medium">{v.title}</h2>
                                        <small className="text-gray-300/60">{v.text}</small>
                                   </div>
                              ))
                         }
                    </div>
               </section>
          </>
     )
}