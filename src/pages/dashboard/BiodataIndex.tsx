import fotoalmas from '../../assets/image/almas.jpeg';

// Data mahasiswa berdasarkan profil Anda
const mahasiswa = {
  nama        : "Almas Jaufilael Syarofina",
  nim         : "24090092",
  programStudi: "D4 Teknik Informatika",
  universitas : "Universitas Harkat Negeri",
  email       : "almassyarfina@gmail.com",
  foto        : fotoalmas
};

export default function BiodataIndex() {
  return (
    <div>
      <div className="text-5xl md:text-4xl font-semibold text-[#8B2F4A] tracking-tight leading-tight text-center mb-8">
        <p>Biodata Mahasiswa</p>
      </div>

      {/* CARD BIODATA */}
      <div className="p-6 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 border p-6 rounded-2xl shadow-sm bg-[#F5F5DC]">
          
          {/* Bagian Foto */}
          <div className="flex justify-center">
            <img
              src={mahasiswa.foto}
              alt={mahasiswa.nama}
              className="w-48 h-64 object-cover rounded-lg border shadow-sm"
            />
          </div>

          {/* Bagian Data */}
                <div className="flex flex-col justify-center w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{mahasiswa.nama}</h2>
                
                {/* Gunakan grid agar titik dua sejajar */}
                <div className="grid grid-cols-[120px_1fr] gap-y-2 text-gray-700">
                    <p className="font-semibold text-gray-900">NIM</p>
                    <p>: {mahasiswa.nim}</p>
                    
                    <p className="font-semibold text-gray-900">Program Studi</p>
                    <p>: {mahasiswa.programStudi}</p>
                    
                    <p className="font-semibold text-gray-900">Universitas</p>
                    <p>: {mahasiswa.universitas}</p>
                    
                    <p className="font-semibold text-gray-900">Email</p>
                    <p>: {mahasiswa.email}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}