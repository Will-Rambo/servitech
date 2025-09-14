import "../App.css";
import Carousel from "../components/Carousel";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";



export default function Home() {
  const navigate = useNavigate(); // hook para navegação
  return (
    <div>
      <header>
        <div className="logo-container">
          <img src="/servitech/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />
          <img src="/servitech/images/logo-servtech.png" alt="ServTech Instalações" className="logo-servtech"/>
        </div>
          <nav className="nav-links">
            <ScrollLink to="servicos" smooth={true} duration={500}>Serviços</ScrollLink>
            <ScrollLink to="sobre" smooth={true} duration={500}>Sobre</ScrollLink>
            <ScrollLink to="contato" smooth={true} duration={500}>Contato</ScrollLink>
          </nav>
      </header>
      <a
        href="https://wa.me/+5543999316610" 
        className="fixed-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/servitech/images/icone-whats.png" alt="Whatsapp" />
      </a>
      <div
        className="sub-header">
        <button
         className="sub-header-col"
          type="button"
          onClick={() => navigate("/seguranca")}
          >
          <span>
            <i className="fas fa-video"></i>
            segurança
          </span>
        </button>
        <button
         className="sub-header-col"
          type="button"
          onClick={() => navigate("/conforto")}
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
          <button onClick={() => window.location.href="https://wa.me/+5543999316610"}>Solicitar Orçamento</button>
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
         <p className="copyright-desktop">© 2025 Servtech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}  




