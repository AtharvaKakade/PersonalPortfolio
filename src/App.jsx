import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import BlankCards from "./components/BlankCards";
import SlidingElements from "./components/SlidingElements";
import InfoGrid from "./components/InfoGrid";
import ShadCN from "./components/ShadCN";
import Experience from "./components/Experience";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import BlogsSection from "./components/BlogsSection";
import ScrollToTop from "./components/ScrollToTop";
import CardLayoutSection from "./components/CardLayoutSection";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import IntrestsPage from "./pages/IntrestsPage";

function App() {
  return (
    <div className="bg-[#000000] text-white">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                {/* <BlankCards/> */}
                {/* <About /> */}
                <CardLayoutSection />
                <ExperiencePage/>
                <ProjectsPage/>
                <Skills />
                
                
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/exp" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsSection />} />
          <Route path="/interests" element={<IntrestsPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
