import { Link } from "react-router-dom";
function Seguranca() {
  return (
    <div style={{ backgroundImage: "url('/servitech/images/familia-feliz.jpg')", width: "100%", minHeight: "100vh", padding: "1rem" }}>
      <header style={{ margin: "0", width: "100%", padding: "3rem"}}>
          <div className="logo-container">
          <img src="/servitech/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />
          <img src="/servitech/images/logo-servtech.png" alt="ServTech Instalações" className="logo-servtech"/>
        </div>
          <nav style={{ marginTop: "2rem" }}>
            <Link to="/" style={{ marginRight: "5rem" }}>Início</Link>
            <Link to="/conforto">Conforto</Link>
          </nav>
      </header>
        <h1 style={{ color: "white", textAlign: "center", margin: "2rem 0" }}>Soluções em Segurança Eletrônica</h1>
        <p style={{ color: "white", maxWidth: "600px", margin: "1rem auto", textAlign: "center" }}>
          Trabalhamos com instalação de <strong>câmeras de segurança de alta resolução</strong>, 
          <strong>cercas elétricas</strong> e <strong>portões automatizados</strong>, garantindo 
          tranquilidade para sua casa ou empresa.
        </p>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <img src="/servitech/images/cameras-2.jpg" alt="Câmeras de segurança" style={{ maxWidth: "100%", borderRadius: "10px" }} />
          <img src="/servitech/images/cerca.webp" alt="Cerca elétrica" style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "1rem" }} />
        </div>
        <footer>
          <div>
            <p className="copyright-mobile">© 2025 Servtech. Todos os direitos reservados.</p>
            <p className="copyright-desktop">© 2025 Servtech. Todos os direitos reservados.</p>
          </div>
        </footer>
    </div>
  );
}

export default Seguranca;