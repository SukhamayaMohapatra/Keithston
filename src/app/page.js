import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import HeroSection from "./HeroSection";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <Dashboard />
      <About />
      <Footer />
    </Box>
  );
}
