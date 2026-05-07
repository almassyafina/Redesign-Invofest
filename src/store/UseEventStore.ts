import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
  id: number;
  nama: string;
  pembicara: string;
  tanggal: string;
  jam: string;
}

interface EventState {
  events: Event[];
  addEvent: (event: Omit<Event, "id">) => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: [],

      addEvent: (event) =>
        set((state) => ({
          events: [
            ...state.events,
            { id: Date.now(), ...event },
          ],
        })),
    }),
    {
      name: "event-storage",
    }
  )
);