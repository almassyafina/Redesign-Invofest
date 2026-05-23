import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePembicaraStore } from '../../../store/usePembicaraStore';

export default function PembicaraCreate() {
  const [name, setNama] = useState("");
  const [role, setRole] = useState("");
  const [image, setFoto] = useState("");

  const navigate = useNavigate();
  const addPembicara = usePembicaraStore((state) => state.addPembicara);

    const handleSimpan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Jangan lupa pakai await
    await addPembicara({ name, role, image });

    navigate("/dashboard/pembicara");
  };

  return (
    <div className="p-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Tambah Pembicara</h1>
      
      <form onSubmit={handleSimpan} className="border-2 border-[#8B2F4A] p-6 rounded-md">
        
        <div className="mb-4">
          <label className="block text-lg mb-2">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukkan nama pembicara"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Contoh: CEO, Developer, dll"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg mb-2">Foto</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setFoto(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder='Masukan Link Foto'
          />
        </div>

        <button
          type="submit"
          className="border-2 bg-[#8B2F4A] text-white border-white px-6 py-2 hover:bg-[#571227] rounded-3xl font-bold"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}