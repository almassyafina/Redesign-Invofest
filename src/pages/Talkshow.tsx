
import Button from "../components/ui/Button";

export default function Talkshow () {
    return (
        <div>
                     <section id='hero' className='py-10 px-20 flex gap-10 justify-between items-center'>
                          <div className='w-2/3 flex flex-col gap-6'>

                           <h1 className="text-5xl md:text-6xl font-semibold text-[#8B2F4A] tracking-tight leading-tight">
                            IT Talkshow
                            </h1>
                           <h2 className="text-2xl text-[#8B2F4A] font-medium">
                            “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
                            </h2>
                           
                          <p className="text-justify">
                           Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa 
                           Depan” Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan
                           nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas 
                           ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi
                           audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif 
                           yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
                          </p>
                    
                          <div className='flex gap-3'>
                          <Button label="Info Selengkapnya" variant='primary'/>
                          <Button label="Hubungi Panitia" variant='outline'/>
                          </div>
                          </div>
                          <div className='w-1/3'>
                          <img 
                          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png" 
                          alt="" 
                          />
                          </div>
                          </section>
        
                </div>
    );
