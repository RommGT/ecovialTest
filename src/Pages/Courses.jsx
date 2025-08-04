import React, { useState } from 'react';
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

// Importar imágenes de vehículos (actualiza estas rutas según tus imágenes)
import VehiculoC from "../images/vehiculos/licenciac.png";
import VehiculoC1 from "../images/vehiculos/licenciac1.png";
import VehiculoD from "../images/vehiculos/licenciad.png";
import VehiculoE from "../images/vehiculos/licenciae.png";

function Courses() {
  const [selectedLicense, setSelectedLicense] = useState('C');
  const [activeTab, setActiveTab] = useState('descripcion');

  // Datos de las licencias
  const licensesData = {
    C: {
      name: "Licencia Tipo C",
      subtitle: "Vehículos Livianos",
      image: VehiculoC,
      color: "#93c121",
      descripcion: {
        title: "Descripción",
        content: `La licencia tipo C te permite conducir vehículos livianos como automóviles, 
        camionetas y vehículos de hasta 3.5 toneladas. Es ideal para uso personal y comercial liviano.
        
        Esta licencia es perfecta para quienes buscan independencia en el transporte personal 
        o desean iniciar un emprendimiento con vehículos livianos.`
      },
      requisitos: {
        title: "Requisitos",
        content: [
          "Ser mayor de 18 años",
          "Cédula de identidad vigente",
          "Certificado médico tipo 1",
          "Curso de educación vial (40 horas)",
          "Examen teórico y práctico",
          "2 fotografías tamaño carnet",
          "Tipo de sangre"
        ]
      },
      horario: {
        title: "Horarios Disponibles",
        content: [
          "Matutino: 8:00 AM - 12:00 PM",
          "Vespertino: 2:00 PM - 6:00 PM", 
          "Nocturno: 6:30 PM - 9:30 PM",
          "Fines de semana: 8:00 AM - 4:00 PM",
          "Duración: 4 semanas",
          "Clases teóricas: 3 días por semana",
          "Clases prácticas: 2 días por semana"
        ]
      },
      malla: {
        title: "Malla Curricular",
        content: [
          "Semana 1: Fundamentos de tránsito y señalización",
          "Semana 2: Mecánica básica y mantenimiento",
          "Semana 3: Conducción defensiva y primeros auxilios",
          "Semana 4: Prácticas intensivas y examen",
          "40 horas teóricas",
          "20 horas prácticas",
          "Simulador de conducción incluido"
        ]
      }
    },
    C1: {
      name: "Licencia Tipo C1",
      subtitle: "Vehículos Pesados",
      image: VehiculoC1,
      color: "#0758a5",
      descripcion: {
        title: "Descripción",
        content: `La licencia tipo C1 te habilita para conducir vehículos pesados de hasta 7.5 toneladas.
        Ideal para transporte de carga mediana y vehículos comerciales de mayor capacidad.
        
        Esta licencia abre oportunidades en el sector logístico y de transporte comercial,
        con mayor demanda laboral y mejores remuneraciones.`
      },
      requisitos: {
        title: "Requisitos",
        content: [
          "Ser mayor de 20 años",
          "Licencia tipo C vigente (mínimo 2 años)",
          "Certificado médico tipo 2",
          "Curso especializado (60 horas)",
          "Examen teórico y práctico especializado",
          "Certificado de antecedentes penales",
          "2 fotografías tamaño carnet"
        ]
      },
      horario: {
        title: "Horarios Disponibles",
        content: [
          "Matutino: 7:00 AM - 12:00 PM",
          "Vespertino: 1:00 PM - 6:00 PM",
          "Sábados: 8:00 AM - 5:00 PM",
          "Duración: 6 semanas",
          "Clases teóricas: 4 días por semana",
          "Clases prácticas: 3 días por semana"
        ]
      },
      malla: {
        title: "Malla Curricular",
        content: [
          "Semanas 1-2: Normativa para vehículos pesados",
          "Semanas 3-4: Manejo de carga y seguridad vial",
          "Semanas 5-6: Prácticas avanzadas y evaluación",
          "60 horas teóricas especializadas",
          "40 horas prácticas en vehículos pesados",
          "Certificación en manejo de carga"
        ]
      }
    },
    D: {
      name: "Licencia Tipo D",
      subtitle: "Transporte Público",
      image: VehiculoD,
      color: "#f39c12",
      descripcion: {
        title: "Descripción",
        content: `La licencia tipo D te autoriza para conducir vehículos de transporte público de pasajeros
        como buses urbanos, intercantonales e interprovinciales.
        
        Es una licencia profesional que requiere alta responsabilidad y preparación especializada
        para el manejo seguro de pasajeros.`
      },
      requisitos: {
        title: "Requisitos",
        content: [
          "Ser mayor de 23 años",
          "Licencia tipo C vigente (mínimo 3 años)",
          "Certificado médico tipo 3 (psicosensométrico)",
          "Curso de transporte público (80 horas)",
          "Certificado de antecedentes penales",
          "Certificado de primeros auxilios",
          "2 fotografías tamaño carnet"
        ]
      },
      horario: {
        title: "Horarios Disponibles",
        content: [
          "Matutino: 6:00 AM - 12:00 PM",
          "Vespertino: 2:00 PM - 8:00 PM",
          "Intensivo de fin de semana",
          "Duración: 8 semanas",
          "Clases teóricas: 5 días por semana",
          "Prácticas: 4 días por semana"
        ]
      },
      malla: {
        title: "Malla Curricular",
        content: [
          "Semanas 1-3: Normativa de transporte público",
          "Semanas 4-5: Atención al cliente y primeros auxilios",
          "Semanas 6-8: Prácticas en rutas reales",
          "80 horas teóricas especializadas",
          "60 horas prácticas supervisadas",
          "Certificación en atención al usuario"
        ]
      }
    },
    E: {
      name: "Licencia Tipo E",
      subtitle: "Vehículos Articulados",
      image: VehiculoE,
      color: "#e74c3c",
      descripcion: {
        title: "Descripción",
        content: `La licencia tipo E es para vehículos articulados, tractocamiones y combinaciones vehiculares
        de gran tonelaje. Representa el nivel más alto de licencias profesionales.
        
        Esta licencia te posiciona en el sector de transporte pesado internacional,
        con las mejores oportunidades laborales del rubro.`
      },
      requisitos: {
        title: "Requisitos",
        content: [
          "Ser mayor de 25 años",
          "Licencia tipo C1 vigente (mínimo 2 años)",
          "Certificado médico tipo 3 especializado",
          "Curso de vehículos articulados (100 horas)",
          "Certificado de antecedentes penales",
          "Certificado internacional de manejo",
          "Seguro de responsabilidad civil"
        ]
      },
      horario: {
        title: "Horarios Disponibles",
        content: [
          "Tiempo completo: 7:00 AM - 5:00 PM",
          "Medio tiempo: 8:00 AM - 12:00 PM",
          "Fines de semana intensivo",
          "Duración: 10 semanas",
          "Programa especializado",
          "Certificación internacional incluida"
        ]
      },
      malla: {
        title: "Malla Curricular",
        content: [
          "Semanas 1-4: Teoría de vehículos articulados",
          "Semanas 5-7: Maniobras especializadas",
          "Semanas 8-10: Certificación y evaluación final",
          "100 horas teóricas avanzadas",
          "80 horas prácticas especializadas",
          "Certificación internacional válida"
        ]
      }
    }
  };

  const currentLicense = licensesData[selectedLicense];

  return (
    <>
      <section className="courses-page">
        <HeroPages name="Nuestros Cursos" />
        
        <div className="container">
          <div className="courses-content">
            {/* Título principal */}
            <div className="courses-header">
              <h2>Tipos de Licencias Disponibles</h2>
              <p>Elige el tipo de licencia que mejor se adapte a tus necesidades y objetivos profesionales</p>
            </div>

            {/* Tabs principales para tipos de licencia */}
            <div className="license-tabs">
              {Object.keys(licensesData).map((licenseType) => (
                <button
                  key={licenseType}
                  className={`license-tab ${selectedLicense === licenseType ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLicense(licenseType);
                    setActiveTab('descripcion');
                  }}
                  style={{
                    '--tab-color': licensesData[licenseType].color
                  }}
                >
                  <div className="tab-content">
                    <span className="license-type">Licencia {licenseType}</span>
                    <span className="license-subtitle">{licensesData[licenseType].subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Contenido de la licencia seleccionada */}
            <div className="license-content">
              {/* Imagen del vehículo */}
              <div className="vehicle-image">
                <img 
                  src={currentLicense.image} 
                  alt={`Vehículo para ${currentLicense.name}`}
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjhmOGY4Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEwMCIgcng9IjEwIiBmaWxsPSIjZGRkIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjI0MCIgcj0iMzAiIGZpbGw9IiNiYmIiLz4KPGNpcmNsZSBjeD0iMzUwIiBjeT0iMjQwIiByPSIzMCIgZmlsbD0iI2JiYiIvPgo8dGV4dCB4PSIyNTAiIHk9IjE4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1zaXplPSIxOCI+VmVow61jdWxvIExpY2VuY2lhIHtzZWxlY3RlZExpY2Vuc2V9PC90ZXh0Pgo8L3N2Zz4=";
                  }}
                />
                <div className="vehicle-overlay">
                  <h3>{currentLicense.name}</h3>
                  <p>{currentLicense.subtitle}</p>
                </div>
              </div>

              {/* Tabs de información */}
              <div className="info-tabs">
                <div className="info-tab-buttons">
                  {['descripcion', 'requisitos', 'horario', 'malla'].map((tab) => (
                    <button
                      key={tab}
                      className={`info-tab-btn ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        '--accent-color': currentLicense.color
                      }}
                    >
                      <i className={`fa-solid ${
                        tab === 'descripcion' ? 'fa-info-circle' :
                        tab === 'requisitos' ? 'fa-list-check' :
                        tab === 'horario' ? 'fa-clock' : 'fa-graduation-cap'
                      }`}></i>
                      {currentLicense[tab].title}
                    </button>
                  ))}
                </div>

                {/* Contenido del tab activo */}
                <div className="info-tab-content">
                  <div className="content-card">
                    <h4>{currentLicense[activeTab].title}</h4>
                    {Array.isArray(currentLicense[activeTab].content) ? (
                      <ul className="content-list">
                        {currentLicense[activeTab].content.map((item, index) => (
                          <li key={index}>
                            <i className="fa-solid fa-check" style={{color: currentLicense.color}}></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="content-text">
                        {currentLicense[activeTab].content.split('\n').map((paragraph, index) => (
                          <p key={index}>{paragraph.trim()}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>¿Listo para obtener tu licencia?</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>¡Contáctanos ahora!</h3>
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </section>

      <style jsx>{`
        .courses-page {
          width: 100%;
        }

        .courses-content {
          padding: 8rem 0;
          max-width: 120rem;
          margin: 0 auto;
        }

        .courses-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .courses-header h2 {
          font-size: 4.2rem;
          color: #010103;
          margin-bottom: 2rem;
          font-family: "Poppins", sans-serif;
        }

        .courses-header p {
          font-size: 1.8rem;
          color: #706f7b;
          font-family: "Rubik", sans-serif;
          max-width: 70rem;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Tabs principales */
        .license-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .license-tab {
          background: white;
          border: 3px solid #e0e0e0;
          border-radius: 12px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .license-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--tab-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .license-tab:hover::before,
        .license-tab.active::before {
          transform: scaleX(1);
        }

        .license-tab:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: var(--tab-color);
        }

        .license-tab.active {
          border-color: var(--tab-color);
          background: linear-gradient(135deg, white 0%, rgba(255,255,255,0.8) 100%);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .tab-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .license-type {
          font-size: 2.2rem;
          font-weight: 700;
          color: #010103;
          font-family: "Poppins", sans-serif;
        }

        .license-subtitle {
          font-size: 1.4rem;
          color: #706f7b;
          font-family: "Rubik", sans-serif;
        }

        /* Contenido de licencia */
        .license-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        /* Imagen del vehículo */
        .vehicle-image {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          aspect-ratio: 4/3;
        }

        .vehicle-image img {
          width: 100%;
          height: 100%;
          object-fit: fit;
        }

        .vehicle-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white;
          padding: 2rem;
        }

        .vehicle-overlay h3 {
          font-size: 2.4rem;
          margin-bottom: 0.5rem;
          font-family: "Poppins", sans-serif;
        }

        .vehicle-overlay p {
          font-size: 1.6rem;
          font-family: "Rubik", sans-serif;
        }

        /* Tabs de información */
        .info-tabs {
          background: white;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .info-tab-buttons {
          display: flex;
          background: #f8f9fa;
          border-bottom: 1px solid #e0e0e0;
        }

        .info-tab-btn {
          flex: 1;
          background: none;
          border: none;
          padding: 2rem 1.5rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .info-tab-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-color);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .info-tab-btn:hover,
        .info-tab-btn.active {
          color: var(--accent-color);
          background: white;
        }

        .info-tab-btn.active::after {
          transform: scaleX(1);
        }

        .info-tab-btn i {
          font-size: 2rem;
        }

        /* Contenido del tab */
        .info-tab-content {
          padding: 3rem;
          min-height: 400px;
        }

        .content-card h4 {
          font-size: 2.2rem;
          color: #010103;
          margin-bottom: 2rem;
          font-family: "Poppins", sans-serif;
        }

        .content-text p {
          font-size: 1.6rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-family: "Rubik", sans-serif;
        }

        .content-list {
          list-style: none;
          padding: 0;
        }

        .content-list li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          font-size: 1.6rem;
          color: #555;
          font-family: "Rubik", sans-serif;
          line-height: 1.5;
        }

        .content-list li i {
          margin-top: 0.2rem;
          font-size: 1.2rem;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .license-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 900px) {
          .license-tabs {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .courses-header h2 {
            font-size: 3.2rem;
          }
        }

        @media (max-width: 600px) {
          .license-tabs {
            grid-template-columns: 1fr;
          }
          
          .info-tab-buttons {
            flex-wrap: wrap;
          }
          
          .info-tab-btn {
            flex: 1 1 50%;
            min-width: 150px;
          }
          
          .courses-content {
            padding: 4rem 2rem;
          }
          
          .info-tab-content {
            padding: 2rem;
          }
        }

        @media (max-width: 400px) {
          .info-tab-btn {
            flex: 1 1 100%;
            padding: 1.5rem;
          }
          
          .license-type {
            font-size: 1.8rem;
          }
          
          .license-subtitle {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Courses;