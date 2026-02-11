import "./App.css";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import WelcomeSection from "./components/WelcomeSection";
import TopProperties from "./components/TopProperties";
import LuxuryBanner from "./components/LuxuryBanner";
import LocalAttractions from "./components/LocalAttraction";
import Footer from "./components/Footer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <WelcomeSection />
      <TopProperties />
      <LuxuryBanner />
      <LocalAttractions />
      <Footer />
    </>
  );
}

export default App;
