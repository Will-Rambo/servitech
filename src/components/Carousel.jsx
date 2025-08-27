import { useState } from "react";
import "./CarouselStyles.css"; // CSS separado para o componente

// Lista de imagens e textos
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
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>❮</button>

      <div className="carousel-slide" onClick={() => openModal(images[currentIndex])}>
        <img src={images[currentIndex].src} alt="slide" />
      </div>

      <button className="arrow right" onClick={nextSlide}>❯</button>

      {/* Bolinhas de navegação */}
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt="modal" />
            <p>{selectedImage.text}</p>
            <button className="close-btn" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carousel;