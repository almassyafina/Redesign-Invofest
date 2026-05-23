import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useEventStore } from "../../../store/useEventStore";
import { useCategoryStore } from "../../../store/useCategoryStore";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function EventCreate() {
const [name, setName] = useState("");
const [categoryId, setCategoryId] = useState<string>("");
const [pembicaraId, setPembicaraId] = useState<string>("");
const [location, setLocation] = useState("");
const [dateEvent, setDateEvent] = useState("");
const [description, setDescription] = useState("");
const navigate = useNavigate();
  const addEvent = useEventStore((state : any) => state.addEvent);

  // ambil category & pembicara
  const categories = useCategoryStore((state : any) => state.categories);
  const pembicaras = usePembicaraStore((state : any) => state.pembicara);
  const fetchCategories = useCategoryStore((state : any) => state.fetchCategories);
  const fetchPembicara = usePembicaraStore((state : any) => state.fetchPembicara);

  useEffect(() => {
    // Panggil fungsi fetch jika datanya ada
    if (fetchCategories) fetchCategories();
    if (fetchPembicara) fetchPembicara();
  }, [fetchCategories, fetchPembicara]);

  // UBAH: Jadikan fungsi ini async
  const handleSimpan = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi tambahan agar tidak mengirim string kosong
    if (!categoryId || !pembicaraId) {
      alert("Harap pilih kategori dan pembicara!");
      return;
    }

    // UBAH: Tambahkan await agar menunggu response API selesai
  await addEvent({
    name: name,
    category_id: Number(categoryId), // Sesuaikan dengan yang diterima backend
    pembicara_id: Number(pembicaraId), // Sesuaikan dengan yang diterima backend
    location: location,
    date_event: new Date(dateEvent).toISOString(), // Sesuaikan dengan yang diterima backend
    description: description,
});
    // Pindah halaman jika sudah sukses tersimpan di backend
    navigate("/dashboard/event"); 
  };

  return (
    <div className="p-10 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Tambah Event</h1>

      <form
        onSubmit={handleSimpan}
        className="border-2 border-[#8B2F4A] p-6 rounded-md"
      >
        {/* Nama Event */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Nama Event</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukkan nama event"
            required
          />
        </div>

        {/* CATEGORY */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Category</label>
          <select
            value={categoryId}
            // UBAH: Hapus Number() karena kita sekarang memakai string ID
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            required
          >
            <option >
              Pilih Category
            </option>
            {categories?.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
          </select>
        </div>

        {/* PEMBICARA */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Pembicara</label>
          <select
            value={pembicaraId}
            // UBAH: Hapus Number() karena kita sekarang memakai string ID
            onChange={(e) => setPembicaraId(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            required
          >
            <option>
              Pilih Pembicara
            </option>
            {pembicaras?.map((item : any) => (
            <option key={item.id} value={item.id}> {item.name}
            </option>
            ))}  
          </select>
        </div>
        
        <div className="mb-4">
        <label className="block text-lg mb-2">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          placeholder="Masukkan lokasi event"
          required
        />
      </div>

        {/* Tanggal */}
        <div className="mb-4">
          <label className="block text-lg mb-2">Tanggal</label>
          <input
            type="date"
            value={dateEvent}
            onChange={(e) => setDateEvent(e.target.value)}
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            required // Tambahkan required agar tidak boleh kosong
          />
        </div>

        <div className="mb-4">
        <label className="block text-lg mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          placeholder="Masukkan deskripsi event"
          required
        />
      </div>

        <button
          type="submit"
          className="border-2 bg-[#8B2F4A] text-white border-[#ffffff] px-6 py-2 hover:bg-[#571227] rounded-3xl font-bold">
          Simpan
        </button>
      </form>
    </div>
  );
}