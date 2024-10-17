import React, { useState, useEffect } from "react";
import "./Parallax.css";
import MainScreen from "../../screens/MainScreen/MainScreen";
const ParallaxScreen = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="parallax">
        <div className="content">
          <h1>Artículos</h1>
          <p>Página de artículos de prueba</p>
        </div>
      </section>

      <section className="content-section">
        <MainScreen />
      </section>

      <section className="parallax">
        <div className="content">
          <h1>Otra sección Parallax</h1>
          <p>Más contenido con fondo parallax.</p>
        </div>
      </section>
    </div>
  );
};

export default ParallaxScreen;
