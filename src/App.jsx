import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";
import DiseasePage from "./pages/DiseasePage";
import AllDiseases from "./pages/AllDiseases";
import Nursing from "./pages/Nursing";
import Medicine from "./pages/Medicine";
import Dentistry from "./pages/Dentistry";

import NursingSection from "./pages/NursingSection";
import MedicalCommunity from "./pages/MedicalCommunity";
import DentalSection from "./pages/DentalSection";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:slug" element={<CoursePage />} />
        <Route path="/disease/:slug" element={<DiseasePage />} />
        <Route path="/diseases" element={<AllDiseases />} />
         {/* MAIN FACULTIES */}
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/dentistry" element={<Dentistry />} />

        {/* NURSING */}
        <Route
          path="/nursing/:section"
          element={<NursingSection />}
        />

        {/* MEDICINE */}
        <Route
          path="/medicine/:community"
          element={<MedicalCommunity />}
        />

        {/* DENTISTRY */}
        <Route
          path="/dentistry/:section"
          element={<DentalSection />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;