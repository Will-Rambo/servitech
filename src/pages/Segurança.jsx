import { Link } from "react-router-dom";
function Seguranca() {
  return (
    <div style={{ padding: "2rem",backgroundColor: "#848492", color: "#fff", minHeight: "100vh"}}>
      <h1>Soluções em Segurança Eletrônica</h1>
      <p>
        Trabalhamos com instalação de <strong>câmeras de segurança de alta resolução</strong>, 
        <strong>cercas elétricas</strong> e <strong>portões automatizados</strong>, garantindo 
        tranquilidade para sua casa ou empresa.
      </p>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/conforto">Conforto</Link>
      </nav>
      <img src="/servitech/images/cameras-2.jpg" alt="Câmeras de segurança" style={{ maxWidth: "100%", borderRadius: "10px" }} />
      <img src="/servitech/images/cerca.webp" alt="Cerca elétrica" style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "1rem" }} />
    </div>
  );
}

export default Seguranca;