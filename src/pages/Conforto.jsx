import { Link } from "react-router-dom";
function Conforto() {
  return (
    <div className="page-container">
      <h1>Conforto e Automação</h1>
      <p>
        Oferecemos instalação de <strong>ar-condicionado split</strong>, 
        <strong>fechaduras eletrônicas</strong> e soluções de automação 
        para trazer praticidade e conforto ao seu dia a dia.
      </p>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/seguranca">Segurança</Link>
      </nav>
      <img src="/servitech/images/arcondicionado-Elgin.jpg" alt="Ar-condicionado Split" style={{ maxWidth: "100%", borderRadius: "10px" }} />
      <img src="/servitech/images/Fechadura-Eletronica.webp" alt="Fechadura eletrônica" style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "1rem" }} />
    </div>
  );
}

export default Conforto;