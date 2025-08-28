import React, { useState } from 'react';
import './App.css';
import Carousel from "./components/Carousel";


function App() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header */}
      <header>
        <img src="/servitech/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />

        <img src="/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />

    
        <img src="/servitech/images/servtech-2.png" alt="ServTech Instalações" className="logo" />

                {/* Botão do menu hamburguer */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </header>
      
      <Carousel />  {/* Carrossel integrado */}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Conforto e Segurança para sua Casa e Empresa</h2>
          <p>Venda e instalação de ar-condicionado split e sistemas de segurança eletrônica.</p>
          <button>Solicitar Orçamento</button>
        </div>
      </section>


      {/* Footer */}
<footer>
  <p>© 2025 Servitech. Todos os direitos reservados.</p>
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://www.instagram.com/servtech777/" target="_blank" rel="noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</footer>
    </div>
  );
}

export default App;



