import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import ContactMe from "./pages/ContactMe/ContactMe";
import Footer from "./pages/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
