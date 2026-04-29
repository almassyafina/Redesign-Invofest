import './App.css'
import Header from '../components/Header';
import Button from '../components/ui/Button';
import { Collapse } from "../components/ui/Collapse";
import CardPembicara from '../components/ui/CardPembicara';
import { Card } from '../components/ui/Card';

export default function Homepage () {
    return (
        <div>
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
                  <Button label="Info Selengkapnya" variant='primary'/>
                  <Button label="Hubungi Panitia" variant='outline'/>
                  </div>
                  </div>
                  <div className='w-1/3'>
                  <img 
                  src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
                  alt="" 
                  />
                  </div>
            </section>


        </div>
    );
}

  const CollapseItems = [
    {
      title: "Apa Itu Invofest?",
      description:
      `Invofest (Informatics Vocational Festival) adalah festival tahunan yang 
      bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam 
      menghadapi era digital. Dengan mengusung tema "Beyond Limits,
       Beyond Intelligence: Innovate for a Smarter Tomorrow ".`,
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description:
      `Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Kampus Harkat Negeri.`,
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description:
      `Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional
      muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang
      untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar
      belakang atau tingkat keahlian.`,
 },
  ];

const cardItems = [
  {
    title: "IT Seminar",
    description:
    `Seminar nasional ini membahas "Human-AI Integration: Merancang Arsitektur
    Kolaboratif, Bukan Kompetitif" untuk mengembangkan potensi diri dan pengetahuan
    teknologi lebih dalam lagi.`,
  },

  {
    title: "IT Talkshow",
    description:
    `Talkshow "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan" membahas 
    peran manusia dalam memanfaatkan AI untuk solusi bekelanjutan dan peningkatan teknologi.`,
  },

  {
    title: " IT Competition",
    description:
    `Kompetisi "From Creation to Innovation" mengajak generasi muda untuk mengembangkan 
    inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu 
    mewujudkan masa depan yang berkelanjutan.`,
  },

  {
    title: "IT Workshop",
    description:
    `Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital
    Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi
    berkelanjutan.`
  },
];

return (
    <> 
      <Header/>


      <div className='max-w-7xl mx-auto'>
      <section id='hero' className='py-10 flex gap-10 justify-between items-center'>
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
      <Button label="Info Selengkapnya" variant='primary'/>
      <Button label="Hubungi Panitia" variant='outline'/>
      </div>
      </div>
      <div className='w-1/3'>
      <img 
      src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
      alt="" 
      />
      </div>
      </section>

      <section id='Pembicara' className='py-24'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 px-3'>
      {pembicara.map((pembicara, index) => (
        <CardPembicara
        key={index}
        name={pembicara.name}
        role={pembicara.role}
        imageUrl={pembicara.imageUrl}
        />
      ))}
      </div>
      </section>


      <section 
      id='cards'
      className='py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3'>
      {cardItems.map((item, index) => (
        <Card key={index} className="w-full">
        <h3 className='text-2xl text-red-900 mb-4'>{item.title}</h3>
        <p>{item.description}</p>
        <Button
        label="Info Selengkapnya"
        variant='primary'
        />
        </Card>
      ))}
      </section>

      <section id='collapse' className='py-24 flex flex-col gap-2 px-3'>
      {CollapseItems.map((item, index) => (
        <Collapse
        key={index}
        title={item.title}
        description={item.description}
        />
      ))}
      </section>
      </div>
    </>
  );
}

export default App;
