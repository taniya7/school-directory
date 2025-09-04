import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowSchools />} />
          <Route path="/add" element={<AddSchool />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
