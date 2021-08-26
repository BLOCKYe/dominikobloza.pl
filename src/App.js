import "./styles/style.css";
import React from "react";
import Landing from "./components/Landing";
import Logo from "./components/Logo";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Logo />
      <Landing />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
