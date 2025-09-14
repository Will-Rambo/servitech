import { useState, useEffect } from "react";
import "./CarouselStyles.css"; 

const images = [
  { src: "/servitech/images/arcondicionado-Elgin.jpg", text: "Instalação de Ar-Condicionado Split" },
  { src: "/servitech/images/cameras-2.jpg", text: "Câmeras de Segurança de alta resolução" },
  { src: "/servitech/images/portao.jpg", text: "Automação de Portões Eletrônicos" },
  { src: "/servitech/images/cerca.webp", text: "Instalação de cerca elétrica" },
  { src: "/servitech/images/Fechadura-Eletronica.webp", text: "Fechadura eletrônica" },
  { src: "/servitech/images/manutencao.webp", text: "Serviços de Manutenção" }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="carousel-slide" key={index}>
              <img src={img.src} alt={img.text} />
              <p>{img.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* indicadores */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;