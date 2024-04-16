// Create a store with a state that matches User.jsx:

import { create } from "zustand";

// userData, loading, error, fetchUserData
export const useUserStore = create(set => ({
  userData: null,
  loading: false,
  error: null,
  fetchUserData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Fetch fails...");
      const data = await response.json();
      console.log(data.results[0]);
      set({ userData: data.results[0] });
    } catch (error) {
      console.log("Error: ", error);
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
