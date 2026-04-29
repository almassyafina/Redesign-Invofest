import Button from "../components/ui/Button";

export default function Competition () {
    return (
        <div>
                     <section id='hero' className='py-10 px-20 flex gap-10 justify-between items-center'>
                          <div className='w-2/3 flex flex-col gap-6'>

                           <h1 className="text-5xl md:text-6xl font-semibold text-[#8B2F4A] tracking-tight leading-tight">
                            IT Competition
                            </h1>
                           <h2 className="text-2xl text-[#8B2F4A] font-medium">
                            "From Creation to Innovation"
                            </h2>
                           
                          <p className="text-justify">
                          Kompetisi dalam INVOFEST ini mengusung tema “From Creation to Innovation”, 
                          Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan 
                          kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang 
                          mampu mewujudkan masa depan yang berkelanjutan.
                          </p>
                    
                          <div className='flex gap-3'>
                          <Button label="Info Selengkapnya" variant='primary'/>
                          <Button label="Hubungi Panitia" variant='outline'/>
                          </div>
                          </div>
                          <div className='w-1/3'>
                          <img 
                          src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png" 
                          alt="" 
                          />
                          </div>
                          </section>
        
                </div>
    );
}