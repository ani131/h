import Navbar from "./components/Navbar";
import "./styles.css";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/ContactPage";
import TrainingPage from "./pages/Training/TrainingPage";
import JourneyPage from "./pages/JourneyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoSection from "./pages/Home/Info/Info";
import NavbarHome from "./components/NavbarHome/NavbarHome";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <InfoSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/training"
            element={
              <>
                <Navbar />
                <TrainingPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/journey"
            element={
              <>
                <Navbar />
                <JourneyPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactPage />
                <Footer />
              </>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}
