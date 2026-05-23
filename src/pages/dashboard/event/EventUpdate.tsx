import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useEventStore } from "../../../store/useEventStore";
import { useCategoryStore } from "../../../store/useCategoryStore";
import { usePembicaraStore } from "../../../store/usePembicaraStore";

export default function EventUpdate() {

  const { id } = useParams();

  const navigate = useNavigate();

  // Ambil data dari store
  const events = useEventStore((state) => state.events);
  const updateEvent = useEventStore((state) => state.updateEvent);
  const categories = useCategoryStore((state) => state.categories);
  const pembicara = usePembicaraStore((state) => state.pembicara);

  // STATE
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState<number>(0);
  const [pembicaraId, setPembicaraId] = useState<number>(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [dateEvent, setdateEvent] = useState("");
 


  // AMBIL DATA EVENT BERDASARKAN ID
  useEffect(() => {

    const event = events.find(
      (item) => item.id === Number(id)
    );

    if (event) {

      setName(event.name);
      setCategoryId(event.categoryId);
      setPembicaraId(event.pembicaraId);
      setLocation(event.location);
      setDescription(event.description);
      setdateEvent(event.dateEvent);



    }

  }, [id, events]);

  // SUBMIT UPDATE
  const handleUpdate = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    updateEvent(Number(id), {
    name,
    categoryId: Number(categoryId),
    pembicaraId: Number(pembicaraId),
    location,
    dateEvent,
    description,
    });

    navigate("/dashboard/event");

  };

  return (
    <div className="p-10 max-w-lg">

      <h1 className="text-2xl font-bold mb-4">
        Update Event
      </h1>

      <form
        onSubmit={handleUpdate}
        className="border-2 border-[#8B2F4A] p-6 rounded-md"
      >

        {/* NAMA EVENT */}
        <div className="mb-4">

          <label className="block text-lg mb-2">
            Nama Event
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            required
          />

        </div>

        {/* CATEGORY */}
        <div className="mb-4">

          <label className="block text-lg mb-2">
            Category
          </label>

          <select
            value={categoryId}
            onChange={(e) =>
              setCategoryId(
                Number(e.target.value)
              )
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            required
          >

            <option value="">
              Pilih Category
            </option>

            {categories.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))}

          </select>

        </div>

        {/* PEMBICARA */}
        <div className="mb-4">

          <label className="block text-lg mb-2">
            Pembicara
          </label>

          <select
            value={pembicaraId}
            onChange={(e) =>
              setPembicaraId(
                Number(e.target.value)
              )
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
            required
          >

            <option value="">
              Pilih Pembicara
            </option>

            {pembicara.map((item) => (
              <option
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))}

          </select>

        </div>

        {/* TANGGAL */}
        <div className="mb-4">

          <label className="block text-lg mb-2">
            Tanggal
          </label>

          <input
            type="date"
            value={dateEvent}
            onChange={(e) =>
              setdateEvent(e.target.value)
            }
            className="w-full border-2 border-[#8B2F4A] p-2 rounded"
          />

        </div>

        {/* BUTTON */}
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