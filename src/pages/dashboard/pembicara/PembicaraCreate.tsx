import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PembicaraCreate() {
  const [nama, setNama] = useState("");
  const [role, setRole] = useState("");
  const [foto, setFoto] = useState("");

  const navigate = useNavigate();

  const handleSimpan = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
      nama,
      role,
      foto
    };

    console.log("Menyimpan Pembicara:", data);

    // setelah simpan, kembali ke halaman index
    navigate("/dashboard/pembicara");
  };

  return (
    <div className="p-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Tambah Pembicara</h1>
      
      <form onSubmit={handleSimpan} className="border-2 border-[#8B2F4A] p-6 rounded-md">
        
        {/* Nama */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukkan nama pembicara"
            required
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Contoh: CEO, Developer, dll"
            required
          />
        </div>

        {/* Foto */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Foto</label>
          <input
            type="text"
            onChange={(e) => setFoto(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder='Masukan Link Foto'
          />
        </div>

        <button
          type="submit"
          className="border-2 bg-green-300 border-[#8B2F4A] px-6 py-2 hover:bg-green-800 rounded-3xl font-bold"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
