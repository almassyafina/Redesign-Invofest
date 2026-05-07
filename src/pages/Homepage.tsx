import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {

    const navigate = useNavigate();

    return (
        <div>

            {/* HERO */}
            <section id='hero' className='py-10 px-20 flex gap-10 justify-between items-center'>
                
                <div className='w-2/3 flex flex-col gap-6'>
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                        alt=""
                        className='w-96'
                    />

                    <p>
                        Invofest (Informatics Vocational Festival) adalah festival tahunan
                        yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
                        Indonesia dalam menghadapi era digital. Dengan mengusung tema
                        "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ".
                    </p>

                    <div className='flex gap-3'>
                        <Button label="Info Selengkapnya" variant='primary' />
                        <Button label="Hubungi Panitia" variant='outline' />
                    </div>
                </div>

                <div className='w-1/3'>
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                        alt=""
                    />
                </div>

            </section>

            {/* SECTION 2 */}
            <section className=" bg-[#d9b6bf] overflow-hidden">

                {/* WAVE TOP */}
                <img
                    src="https://www.invofest-harkatnegeri.com/assets/wave-top.png"
                    alt="wave top"
                    className="abtop-0 left-0 w-full"
                />

                {/* CONTENT */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-5xl font-bold text-[#7a2e3a] mb-6">
                        Tentang INVOFEST
                    </h2>

                    <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto mb-14">
                        Invofest merupakan festival teknologi tahunan yang
                        menghadirkan seminar, workshop, dan kompetisi untuk
                        mengembangkan inovasi digital bagi generasi muda Indonesia.
                    </p>


                    {/* CARD */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* CARD 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition duration-300">

                            <h3 className="text-2xl font-bold mb-3">
                                IT Seminar
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm">
                                Seminar teknologi bersama narasumber profesional
                                dan praktisi industri digital.
                            </p>

                            <button
                                onClick={() => navigate('/Seminar')}
                                className="bg-[#7a2e3a] text-white px-4 py-2 rounded-lg text-sm"
                            >
                                Info Selengkapnya
                            </button>

                        </div>


                        {/* CARD 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition duration-300">

                            <h3 className="text-2xl font-bold mb-3">
                                IT Talkshow
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm">
                                Diskusi interaktif mengenai perkembangan teknologi
                                dan inovasi masa depan.
                            </p>

                            <button
                                onClick={() => navigate('/Talkshow')}
                                className="bg-[#7a2e3a] text-white px-4 py-2 rounded-lg text-sm"
                            >
                                Info Selengkapnya
                            </button>

                        </div>


                        {/* CARD 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition duration-300">

                            <h3 className="text-2xl font-bold mb-3">
                                IT Competition
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm">
                                Kompetisi untuk mengasah kemampuan teknologi,
                                kreativitas, dan problem solving.
                            </p>

                            <button
                                onClick={() => navigate('/competition')}
                                className="bg-[#7a2e3a] text-white px-4 py-2 rounded-lg text-sm"
                            >
                                Info Selengkapnya
                            </button>

                        </div>


                        {/* CARD 4 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:scale-105 transition duration-300">

                            <h3 className="text-2xl font-bold mb-3">
                                IT Workshop
                            </h3>

                            <p className="text-gray-600 mb-4 text-sm">
                                Workshop praktik langsung untuk meningkatkan skill
                                teknologi digital modern.
                            </p>

                            <button
                                onClick={() => navigate('/Workshop')}
                                className="bg-[#7a2e3a] text-white px-4 py-2 rounded-lg text-sm"
                            >
                                Info Selengkapnya
                            </button>

                        </div>

                    </div>

                </div>


                {/* WAVE BOTTOM */}
            <img
                src="https://www.invofest-harkatnegeri.com/assets/wave-bot.png"
                alt="wave bottom"
                className="w-full block"
            />
            </section>



            

        </div>
    );
}