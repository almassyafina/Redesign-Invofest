import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function PembicaraUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  const pembicara = usePembicaraStore(
    (state) => state.pembicara
  );

  const updatePembicara = usePembicaraStore(
    (state) => state.updatePembicara
  );

  const [nama, setNama] = useState("");
  const [role, setRole] = useState("");
  const [foto, setFoto] = useState("");

  // ambil data berdasarkan id
  useEffect(() => {

    const dataPembicara = pembicara.find(
      (item) => item.id === Number(id)
    );

    if (dataPembicara) {
      setNama(dataPembicara.nama);
      setRole(dataPembicara.role);
      setFoto(dataPembicara.foto);
    }

  }, [id, pembicara]);

  // submit update
  const handleUpdate = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    updatePembicara(Number(id), {
      nama,
      role,
      foto,
    });

    navigate("/dashboard/pembicara");

  };

  return (
    <div className="p-10 max-w-lg">

      <h1 className="text-2xl font-bold mb-4">
        Update Pembicara
      </h1>

      <form
        onSubmit={handleUpdate}
        className="border-2 border-[#8B2F4A] p-6 rounded-md"
      >

        {/* Nama */}
        <div className="mb-4">
          <label className="block text-lg mb-2">
            Nama
          </label>

          <input
            type="text"
            value={nama}
            onChange={(e) =>
              setNama(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-lg mb-2">
            Role
          </label>

          <input
            type="text"
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          />
        </div>

        {/* Foto */}
        <div className="mb-6">
          <label className="block text-lg mb-2">
            Foto
          </label>

          <input
            type="text"
            value={foto}
            onChange={(e) =>
              setFoto(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="border-2 bg-yellow-400 border-[#8B2F4A] px-6 py-2 rounded-3xl font-bold hover:bg-yellow-500"
        >
          Update
        </button>

      </form>
    </div>
  );
}