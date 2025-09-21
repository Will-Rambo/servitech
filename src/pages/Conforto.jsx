import { Link } from "react-router-dom";
function Conforto() {
  return (
    <div style={{ backgroundImage: "url('/servitech/images/ar-condicionado.webp')", width: "100%", minHeight: "100vh", padding: "1rem" }}>
      <header style={{ margin: "0", width: "100%", padding: "3rem"}}>
          <div className="logo-container">
            <img src="/servitech/images/logo-bordo-500-sf.png" alt="ServTech Instalações" className="logo" />
            <img src="/servitech/images/logo-servtech.png" alt="ServTech Instalações" className="logo-servtech"/>
          </div>
          <nav style={{ marginTop: "2rem" }}>
            <Link to="/" style={{ marginRight: "5rem" }}>Início</Link>
            <Link to="/seguranca">Segurança</Link>
          </nav>
      </header>
      <main>
        <h1 style={{ color: "white", textAlign: "center", margin: "2rem 0" }}>Conforto e Automação</h1>
        <p style={{ color: "white", maxWidth: "600px", margin: "1rem auto", textAlign: "center" }}>
          Oferecemos instalação de <strong>ar-condicionado split</strong>, 
          <strong>fechaduras eletrônicas</strong> e soluções de automação 
          para trazer praticidade e conforto ao seu dia a dia.
        </p>
          <img src="/servitech/images/arcondicionado-Elgin.jpg" alt="Ar-condicionado Split" style={{ maxWidth: "100%", borderRadius: "10px" }} />
          <img src="/servitech/images/Fechadura-Eletronica.webp" alt="Fechadura eletrônica" style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "1rem" }} />
      </main>
      <footer>
        <div>
          <p className="copyright-mobile">© 2025 Servtech. Todos os direitos reservados.</p>
          <p className="copyright-desktop">© 2025 Servtech. Todos os direitos reservados.</p>
      </div>
      </footer>
    </div>
  );
}

export default Conforto;