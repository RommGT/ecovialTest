import React, { useState } from 'react';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";

// Función para cargar imágenes dinámicamente desde src
const loadImagesFromSrc = (city, count) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    try {
      // Usa require para cargar las imágenes desde src
      const image = require(`../images/galeria/${city}/escuela${i}.png`);
      images.push(image);
    } catch (error) {
      // Si la imagen no existe, la saltamos
      console.log(`Imagen foto-${i}.jpg no encontrada en ${city}`);
    }
  }
  return images;
};

// Cargar automáticamente todas las imágenes (ajusta los números según tus fotos)
const quitoImages = loadImagesFromSrc('quito', 20); // Cambia 20 por un número mayor al de fotos que tienes
const santoDomingoImages = loadImagesFromSrc('santo-domingo', 20); // Cambia 20 por un número mayor al de fotos que tienes

function About() {
  const [selectedCity, setSelectedCity] = useState('quito');
  const [selectedImage, setSelectedImage] = useState(null);

  const currentImages = selectedCity === 'quito' ? quitoImages : santoDomingoImages;
  const cityName = selectedCity === 'quito' ? 'Quito' : 'Santo Domingo';

  const openLightbox = (image, index) => {
    setSelectedImage({ image, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const newIndex = direction === 'next' 
      ? (selectedImage.index + 1) % currentImages.length
      : (selectedImage.index - 1 + currentImages.length) % currentImages.length;
    
    setSelectedImage({
      image: currentImages[newIndex],
      index: newIndex
    });
  };

  return (
    <>
      <section className="about-page">
        <HeroPages name="Nuestra Escuela" />
        <div className="container">
          <div className="school-main">
            <div className="school-main__content">
              <div className="school-main__text">
                <h3>Conoce Nuestras Instalaciones</h3>
                <h2>Donde nacen los conductores seguros</h2>
                <p>
                  Con más de 10 años de experiencia formando conductores responsables y seguros, 
                  nuestra escuela cuenta con las mejores instalaciones y el equipo más capacitado. 
                  Tenemos sedes en Quito y Santo Domingo, cada una equipada con aulas modernas, 
                  simuladores de conducción y una flota de vehículos en excelente estado.
                </p>
                <p>
                  Nuestro compromiso es brindarte la mejor educación vial, con instructores 
                  certificados y metodologías actualizadas que te prepararán para ser un 
                  conductor seguro y responsable.
                </p>
              </div>

              {/* Selector de ciudad */}
              <div className="city-selector">
                <h3>Selecciona nuestra sede:</h3>
                <div className="city-buttons">
                  <button 
                    className={`city-btn ${selectedCity === 'quito' ? 'active' : ''}`}
                    onClick={() => setSelectedCity('quito')}
                  >
                    <i className="fa-solid fa-building"></i>
                    Quito
                  </button>
                  <button 
                    className={`city-btn ${selectedCity === 'santo-domingo' ? 'active' : ''}`}
                    onClick={() => setSelectedCity('santo-domingo')}
                  >
                    <i className="fa-solid fa-building"></i>
                    Santo Domingo
                  </button>
                </div>
              </div>

              {/* Galería de fotos */}
              <div className="photo-gallery">
                <h3>Galería de Fotos - Sede {cityName}</h3>
                <div className="gallery-grid">
                  {currentImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="gallery-item"
                      onClick={() => openLightbox(image, index)}
                    >
                      <img 
                        src={image} 
                        alt={`Instalaciones ${cityName} ${index + 1}`}
                        onError={(e) => {
                          // Imagen placeholder en caso de error
                          e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmMGYwIi8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDI0MFYxNDBIMjAwVjEwMFoiIGZpbGw9IiNjY2MiLz4KPHBhdGggZD0iTTE2MCAyMDBIMjQwVjE4MEgxNjBWMjAwWiIgZmlsbD0iI2NjYyIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1zaXplPSIxNiI+RXNjdWVsYSB7Y2l0eU5hbWV9PC90ZXh0Pgo8L3N2Zz4=";
                        }}
                      />
                      <div className="gallery-overlay">
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                        <span>Ver imagen</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateImage('prev')}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <img 
              src={selectedImage.image} 
              alt={`Instalaciones ${cityName}`}
              onError={(e) => {
                e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmMGYwIi8+CjxwYXRoIGQ9Ik0yMDAgMTAwSDI0MFYxNDBIMjAwVjEwMFoiIGZpbGw9IiNjY2MiLz4KPHBhdGggZD0iTTE2MCAyMDBIMjQwVjE4MEgxNjBWMjAwWiIgZmlsbD0iI2NjYyIvPgo8dGV4dCB4PSIyMDAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1zaXplPSIxNiI+RXNjdWVsYSB7Y2l0eU5hbWV9PC90ZXh0Pgo8L3N2Zz4=";
              }}
            />
            <button className="lightbox-nav lightbox-next" onClick={() => navigateImage('next')}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="lightbox-info">
              <p>Imagen {selectedImage.index + 1} de {currentImages.length} - Sede {cityName}</p>
            </div>
          </div>
        </div>
      )}

      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Aprende a conducir con confianza y seguridad</h2>
            <span>
              <i className="fa-solid fa-car"></i>
            </span>
          </div>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .school-main {
          margin: 10rem auto;
          max-width: 120rem;
        }

        .school-main__content {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .school-main__text {
          text-align: center;
          max-width: 90rem;
          margin: 0 auto;
          color: #010103;
        }

        .school-main__text h3 {
          font-size: 2.4rem;
          font-family: "Rubik", sans-serif;
          font-weight: 500;
          color: #93c121;
          margin-bottom: 1rem;
        }

        .school-main__text h2 {
          font-size: 4.2rem;
          line-height: 1.2;
          margin-bottom: 2rem;
        }

        .school-main__text p {
          font-size: 1.6rem;
          color: #706f7b;
          font-family: "Rubik", sans-serif;
          line-height: 1.6;
          margin-bottom: 2rem;
          text-align: justify;
        }

        .city-selector {
          text-align: center;
          margin: 4rem 0;
        }

        .city-selector h3 {
          font-size: 2.2rem;
          color: #010103;
          margin-bottom: 2rem;
          font-family: "Rubik", sans-serif;
        }

        .city-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .city-btn {
          background-color: #f8f8f8;
          border: 2px solid #93c121;
          color: #93c121;
          padding: 1.5rem 3rem;
          border-radius: 8px;
          font-size: 1.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .city-btn:hover {
          background-color: #93c121;
          color: white;
          transform: translateY(-2px);
        }

        .city-btn.active {
          background-color: #93c121;
          color: white;
          box-shadow: 0 5px 15px rgba(147, 193, 33, 0.3);
        }

        .photo-gallery {
          margin-top: 5rem;
        }

        .photo-gallery h3 {
          font-size: 2.8rem;
          color: #010103;
          text-align: center;
          margin-bottom: 3rem;
          font-family: "Poppins", sans-serif;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(147, 193, 33, 0.8);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          color: white;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay i {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .gallery-overlay span {
          font-size: 1.6rem;
          font-weight: 600;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-content img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .lightbox-close {
          position: absolute;
          top: -4rem;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          z-index: 10001;
          transition: all 0.3s ease;
        }

        .lightbox-close:hover {
          color: #93c121;
          transform: scale(1.1);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(147, 193, 33, 0.8);
          border: none;
          color: white;
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10001;
        }

        .lightbox-nav:hover {
          background: rgba(147, 193, 33, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .lightbox-prev {
          left: -7rem;
        }

        .lightbox-next {
          right: -7rem;
        }

        .lightbox-info {
          position: absolute;
          bottom: -4rem;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          text-align: center;
          font-size: 1.6rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .school-main {
            margin: 5rem auto;
            padding: 0 2rem;
          }

          .school-main__text h2 {
            font-size: 3.2rem;
          }

          .school-main__text h3 {
            font-size: 2rem;
          }

          .school-main__text p {
            font-size: 1.4rem;
          }

          .city-buttons {
            flex-direction: column;
            align-items: center;
          }

          .city-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .lightbox-nav {
            width: 4rem;
            height: 4rem;
            font-size: 1.5rem;
          }

          .lightbox-prev {
            left: -5rem;
          }

          .lightbox-next {
            right: -5rem;
          }

          .lightbox-close {
            top: -3rem;
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            padding: 1rem;
          }

          .lightbox-nav {
            width: 3.5rem;
            height: 3.5rem;
            font-size: 1.2rem;
          }

          .lightbox-prev {
            left: -4rem;
          }

          .lightbox-next {
            right: -4rem;
          }
        }
      `}</style>
    </>
  );
}

export default About;