import React from 'react';
import './App.css';
import Carousel from "./components/Carousel";



function App() {
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/servitech/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />
          <img src="/servitech/images/s.png" alt="ServTech Instalações" className="logo-servtech"/>
        </div>
        <nav className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <a
        href="https://wa.me/+5543999316610" // ou outro link desejado
        className="fixed-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="./images/icone-whats.png" alt="Whatsapp" />
      </a>
      <div
        className="sub-header">
        <button
         className="sub-header-col"
          type="button"
          onClick={() => alert('Você clicou no botão!')}
          >
          <span>
            <i className="fas fa-video"></i>
            segurança
          </span>
        </button>
        <button
         className="sub-header-col"
          type="button"
          onClick={() => alert('Você clicou no botão!')}
        >
          <span>
            <i className="fas fa-snowflake"></i>
            conforto
          </span>
        </button>
      </div>
      <Carousel />  {/* Carrossel integrado */}

      {/* Hero Section */}
      <section className="hero" id="sobre">
        <div className="hero-content">
          <h2>Conforto e Segurança para sua Casa e Empresa</h2>
          <p>Venda e instalação de ar-condicionado split e sistemas de segurança eletrônica.</p>
          <button onClick={() => window.location.href='tel:(43) 99931-6610'}>Solicitar Orçamento</button>
        </div>
      </section>


      {/* Footer */}
      <footer id="contato">
        <div className="footer-col">
          <img src="/servitech/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />
        </div>
        <div className="footer-col">
          <h3>Contato</h3>
          <a href='tel:(43) 99931-6610'>(43) 99931-6610</a>
          <a href='https://www.google.com/maps/place/Av.+Curitiba,+2152+-+Centro,+Apucarana-PR'>Av. Curitiba, 2152 - Centro, Apucarana-PR</a>
          <p>CEP 86800-704</p>
          <p className="copyright-desktop">© 2025 Servtech. Todos os direitos reservados.</p>
        </div>
        <div className="footer-col">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/servtech777/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="copyright-mobile">© 2025 Servtech. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}  

export default App;



