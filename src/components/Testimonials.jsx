import Video1 from "../videos/testimonial1.mp4";
import Video2 from "../videos/testimonial2.mp4";
import { useEffect } from "react";

function Testimonials() {
  useEffect(() => {
    const handleVideoPlay = () => {
      // Función para manejar la reproducción del video
      const playButtons = document.querySelectorAll('.play-button');
      const videoOverlays = document.querySelectorAll('.video-overlay');
      const videos = document.querySelectorAll('.testimonial-video');

      playButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          const video = videos[index];
          const overlay = videoOverlays[index];
          
          if (video) {
            video.play();
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'none';
          }
        });
      });

      // Mostrar overlay nuevamente cuando el video se pausa
      videos.forEach((video, index) => {
        video.addEventListener('pause', () => {
          const overlay = videoOverlays[index];
          if (overlay && video.currentTime !== video.duration) {
            overlay.style.opacity = '0';
            overlay.style.pointerEvents = 'auto';
            setTimeout(() => {
              overlay.style.opacity = '1';
            }, 100);
          }
        });

        video.addEventListener('ended', () => {
          const overlay = videoOverlays[index];
          if (overlay) {
            overlay.style.opacity = '1';
            overlay.style.pointerEvents = 'auto';
          }
        });
      });
    };

    // Ejecutar después de que el componente se monte
    setTimeout(handleVideoPlay, 100);

    // Cleanup function
    return () => {
      const playButtons = document.querySelectorAll('.play-button');
      const videos = document.querySelectorAll('.testimonial-video');
      
      playButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      
      videos.forEach(video => {
        video.removeEventListener('pause', () => {});
        video.removeEventListener('ended', () => {});
      });
    };
  }, []);

  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Testimonios Reales</h4>
              <h2>Nuestros Estudiantes Opinan</h2>
              <p>
                Escucha las experiencias de quienes confiaron en nosotros para aprender a conducir. 
                Testimonios auténticos de estudiantes que lograron obtener su licencia con éxito 
                y confianza en nuestras clases de manejo.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="testimonial-video-box">
                <p className="video-description">
                  "La formación que recibí me preparó completamente. Los instructores
                  me enseñaron desde lo básico hasta técnicas avanzadas."
                </p>
                <div className="video-container">
                  <video 
                    controls 
                    poster="../images/thumbnails/video1-thumb.jpg"
                    className="testimonial-video"
                    preload="metadata"
                  >
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay">
                    <div className="play-button">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-video-box">
                <p className="video-description">
                  "Gracias a la metodología profesional de la escuela, obtuve mi licencia y ahora trabajo 
                  como conductor profesional. Excelente inversión en mi futuro."
                </p>
                <div className="video-container">
                  <video 
                    controls 
                    poster="../images/thumbnails/video2-thumb.jpg"
                    className="testimonial-video"
                    preload="metadata"
                  >
                    <source src={Video2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay">
                    <div className="play-button">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;