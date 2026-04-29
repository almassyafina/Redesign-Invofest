
import Button from "../components/ui/Button";

export default function Seminar () {
    return (
        <div>
                     <section id='hero' className='py-10 px-20 flex gap-10 justify-between items-center'>
                          <div className='w-2/3 flex flex-col gap-6'>

                           <h1 className="text-5xl md:text-6xl font-semibold text-[#8B2F4A] tracking-tight leading-tight">
                            IT Seminar
                            </h1>
                           <h2 className="text-2xl text-[#8B2F4A] font-medium">
                            “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif”
                            </h2>
                           
                          <p className="text-justify">
                          Seminar nasional yang membahas strategi dan arsitektur teknologi 
                          untuk menciptakan sistem di mana manusia dan AI bekerja sebagai 
                          mitra yang sinergis.Yang bertujuan mengubah paradigma dari 
                          persaingan menjadi kolaborasi, serta meningkatkan pengetahuan 
                          peserta dalam merancang teknologi AI yang berpusat pada manusia.
                          </p>
                    
                          <div className='flex gap-3'>
                          <Button label="Info Selengkapnya" variant='primary'/>
                          <Button label="Hubungi Panitia" variant='outline'/>
                          </div>
                          </div>
                          <div className='w-1/3'>
                          <img 
                          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png
" 
                          alt="" 
                          />
                          </div>
                          </section>
        
                </div>
    );

