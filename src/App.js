import React, { useState, useEffect } from "react";
import './App.css';
import Header from './componentes/header/Header';
import Navbar from './componentes/navbar/Navbar';
import Quien_soy from "./componentes/quien_soy/Quien_soy";
import Info from "./componentes/info/Info";
import Footer from "./componentes/footer/Footer";


function App() {
  const [scrollHeight, setScrollHeaight] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeaight(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Header />
      <Quien_soy />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
