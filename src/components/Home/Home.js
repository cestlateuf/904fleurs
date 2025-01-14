import React from "react";
import "../../styles/Home.css";
import ReactLenis from "lenis/react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomeContent from "./HomeContent";

export default function Home() {
  return (
      <div className="container-home">
        <Header />
        <HomeContent />
        <Footer />
      </div>
  );
}