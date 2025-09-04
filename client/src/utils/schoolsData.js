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

// export const useSchoolStore = create((set) => ({
//   schools: [
//     {
//       id: "1",
//       name: "Oakridge Elementary",
//       email: "info@oakridge.edu",
//       phone: "(555) 123-4567",
//       address: "123 Oak Street",
//       city: "Springfield",
//       state: "IL",
//       zipCode: "62701",
//       image:
//         "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
//       createdAt: new Date("2023-01-15"),
//     },
//     {
//       id: "2",
//       name: "Westside High School",
//       email: "admin@westside.edu",
//       phone: "(555) 987-6543",
//       address: "456 Maple Avenue",
//       city: "Riverdale",
//       state: "NY",
//       zipCode: "10471",
//       image:
//         "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       createdAt: new Date("2023-02-20"),
//     },
//     {
//       id: "3",
//       name: "Sunshine Montessori",
//       email: "hello@sunshinemontessori.org",
//       phone: "(555) 234-5678",
//       address: "789 Sunflower Lane",
//       city: "Portland",
//       state: "OR",
//       zipCode: "97205",
//       image:
//         "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
//       createdAt: new Date("2023-03-10"),
//     },
//   ],
//   addSchool: (school) =>
//     set((state) => ({
//       schools: [
//         ...state.schools,
//         {
//           ...school,
//           id: Math.random().toString(36).substring(2, 9),
//           createdAt: new Date(),
//         },
//       ],
//     })),
// }));
