import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EventCreate() {
  const [nama, setNama] = useState("");
  const [pembicara, setPembicara] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");

  const navigate = useNavigate();

  const handleSimpan = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
      nama,
      pembicara,
      tanggal,
      jam
    };

    console.log("Menyimpan Event:", data);

    // setelah simpan, kembali ke halaman index
    navigate("/dashboard/event");
  };

  return (
    <div className="p-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Tambah Event</h1>
      
      <form onSubmit={handleSimpan} className="border-2 border-[#8B2F4A] p-6 rounded-md">
        
        {/* Nama */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Nama Event</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukkan nama Event"
            required
          />
        </div>

        {/* Pembicara */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Pembicara</label>
          <input
            type="text"
            value={pembicara}
            onChange={(e) => setPembicara(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukan Nama Pembicara"
            required
          />
        </div>

        {/* Tanggal */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Tanggal</label>
          <input
            type="date"
            onChange={(e) => setTanggal(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          />

        </div>
        {/* JAM */}
        <div className="mb-6">
          <label className="block text-lg mb-2">Jam</label>
          <input
            type="time"
            onChange={(e) => setJam(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
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
