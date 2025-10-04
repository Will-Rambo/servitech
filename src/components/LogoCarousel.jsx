import "./LogoCarousel.css";

const logos = [
  { src: "/servitech/images/logos/lg.png", alt: "LG" },
  { src: "/servitech/images/logos/samsung.png", alt: "Samsung" },
  { src: "/servitech/images/logos/elgin.png", alt: "Elgin" },
  { src: "/servitech/images/logos/intelbras.png", alt: "Intelbras" },
  { src: "/servitech/images/logos/daikin.png", alt: "Daikin" },
  { src: "/servitech/images/logos/tcl.png", alt: "TCL" },
  { src: "/servitech/images/logos/agratto.jpg", alt: "Agratto" },
  { src: "/servitech/images/logos/gree.png", alt: "Gree" },
  { src: "/servitech/images/logos/tp-link.png", alt: "TP-Link" },
  { src: "/servitech/images/logos/mercusys.png", alt: "Mercusys" },
  { src: "/servitech/images/logos/positivo.png", alt: "Positivo" },
  { src: "/servitech/images/logos/garen.png", alt: "Garen" },
  { src: "/servitech/images/logos/ppa.png", alt: "PPA" },
  { src: "/servitech/images/logos/vix.png", alt: "Vix" }

];

function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-track">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}   
            alt={logo.alt}   
            className="logo-item"
          />
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;