import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryStore } from "../../../store/useCategoryStore";

export default function CategoryUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  const categories = useCategoryStore(
    (state) => state.categories
  );

  const updateCategory = useCategoryStore(
    (state) => state.updateCategory
  );

  const [nama, setNama] = useState("");

  // mengambil data category berdasarkan id
  useEffect(() => {

    const category = categories.find(
      (item) => item.id === Number(id)
    );

    if (category) {
      setNama(category.name);
    }

  }, [id, categories]);

  // submit update
  const handleUpdate = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    updateCategory(Number(id), nama);

    navigate("/dashboard/category");

  };

  return (
    <div className="p-10 max-w-lg">

      <h1 className="text-2xl font-bold mb-4">
        UPDATE CATEGORY
      </h1>

      <form
        onSubmit={handleUpdate}
        className="border-2 border-[#8B2F4A] p-6 rounded-md"
      >

        <div className="mb-6">

          <label className="block text-xl mb-2">
            Nama Category
          </label>

          <input
            type="text"
            value={nama}
            onChange={(e) =>
              setNama(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            placeholder="Masukkan nama category..."
            required
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