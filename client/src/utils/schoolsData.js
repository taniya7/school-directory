import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
console.log("API_URL in prod:", API_URL);

export const useSchoolStore = create((set, get) => ({
  schools: [],
  fetchSchools: async () => {
    try {
      const res = await axios.get(`${API_URL}/schools`);
      console.log("Fetched schools:", res.data);
      set({ schools: res.data.data });
    } catch (err) {
      console.error("Error fetching schools:", err);
    }
  },
  addSchool: async (school) => {
    try {
      const res = await axios.post(`${API_URL}/schools`, school);
      set({ schools: [...get().schools, res.data.data] });
    } catch (err) {
      console.error("Error adding school:", err);
    }
  },
}));
