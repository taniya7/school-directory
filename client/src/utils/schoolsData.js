import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const useSchoolStore = create((set, get) => ({
  schools: [],
  fetchSchools: async () => {
    try {
      const res = await axios.get(`${API_URL}/schools`);
      set({ schools: res.data });
    } catch (err) {
      console.error("Error fetching schools:", err);
    }
  },
  addSchool: async (school) => {
    try {
      const res = await axios.post(`${API_URL}/schools`, school);
      set({ schools: [...get().schools, res.data] });
    } catch (err) {
      console.error("Error adding school:", err);
    }
  },
}));
