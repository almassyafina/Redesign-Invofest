import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryCreate() {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const handleSimpan = (any: { preventDefault: () => void; }) => {
    any.preventDefault();
    console.log("Menyimpan Kategori:", nama);
    
    navigate("/dashboard/category"); 
  };

  return (
    <div className="p-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">ADD New Category</h1>
      
      <form onSubmit={handleSimpan} className="border-2 border-[#8B2F4A] p-6 rounded-md">
        <div className="mb-6">
          <label className="block text-xl mb-2">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukkan nama kategori..."
            required
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
};

