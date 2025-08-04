import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import React, { useState } from 'react';

function Contact() {
  const [activeTab, setActiveTab] = useState('quito');

  const sucursales = {
    quito: {
      nombre: 'QUITO',
      telefono: 'PBX (02) 2419276 / (02) 2813380',
      email: '0998248872 / 0989010381',
      direccion: 'De los Guabos 47-188 y Av. El Inca',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.8050183487437!2d-78.47392852382416!3d-0.15258043982808178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d590073c9959b9%3A0x1f8f0182ad211ff3!2sEcovial!5e0!3m2!1sen!2sec!4v1754277601840!5m2!1sen!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    },
    santodomingo: {
      nombre: 'SANTO DOMINGO',
      email: '0999671362 / 0998249286',
      direccion: 'Av. Federico González Suárez y La Pinta esq.',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.8197090454337!2d-79.1735272435391!3d-0.2612877630155607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d54795e807d3cd%3A0xc75286ffdb7958c4!2sECOVIAL%20ESCUELA%20DE%20CONDUCTORES%20PROFESIONALES!5e0!3m2!1sen!2sec!4v1754278288865!5m2!1sen!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    }
  };

  const sucursalActual = sucursales[activeTab];

  console.log('Active tab:', activeTab, 'Sucursal actual:', sucursalActual);

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contacto" />
        <div className="container">
          <div className="contact-div">
            
            <div className="sucursal-widget">
              {/* Contenido principal - Tabs/Info y Mapa */}
              <div className="main-content">
                {/* Sección izquierda - Tabs y Información de contacto */}
                <div className="left-section">
                  <div className="tabs-container">
                    {/* Tabs para sucursales */}
                    <div className="sucursales-tabs">
                      <button 
                        className={`tab-button ${activeTab === 'quito' ? 'active' : ''}`}
                        onClick={() => {
                          console.log('Clicked Quito');
                          setActiveTab('quito');
                        }}
                      >
                        QUITO
                      </button>
                     
                      <button 
                        className={`tab-button ${activeTab === 'santodomingo' ? 'active' : ''}`}
                        onClick={() => {
                          console.log('Clicked Santo Domingo');
                          setActiveTab('santodomingo');
                        }}
                      >
                        SANTO DOMINGO
                      </button>
                    </div>

                    {/* Solo información de contacto */}
                    <div className="contact-content">
                      <div className="contact-info-section">
                        <div className="contact-info-grid">
                          <div className="info-group">
                            <h3>{sucursalActual.telefono?'Teléfono' : ''}</h3>
                          {sucursalActual.telefono?<div className="info-divider"></div> : null}
                            <p>{sucursalActual?.telefono || ''}</p>
                          </div>

                          <div className="info-group">
                            <h3>Celular</h3>
                            <div className="info-divider"></div>
                            <p>{sucursalActual?.email || 'Cargando...'}</p>
                          </div>

                          <div className="info-group">
                            <h3>Dirección</h3>
                            <div className="info-divider"></div>
                            <p>{sucursalActual?.direccion || 'Cargando...'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sección derecha - Solo Mapa */}
                <div className="right-section">
                  <div className="map-container">
                    <div className="map-header">
                      <h3>Ubicación - {sucursalActual?.nombre || 'Cargando...'}</h3>
                    </div>
                    <iframe
                      key={activeTab}
                      className="map-iframe"
                      src={sucursalActual?.mapa || ''}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="map-info">
                      <p>
                        <strong>{sucursalActual?.direccion || 'Cargando...'}</strong><br />
                        {sucursalActual.telefono ?sucursalActual.telefono : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario separado - Sección completa */}
              <div className="form-section">
                <div className="form-header">
                  <h3>Contáctanos</h3>
                </div>
                <div className="contact-form-section">
                  <div className="form-content">
                    <div className="form-field">
                      <label>Nombres</label>
                      <input type="text" placeholder="" />
                    </div>

                    <div className="form-field">
                      <label>Email</label>
                      <input type="email" placeholder="" />
                    </div>

                    <div className="form-field">
                      <label>Teléfono</label>
                      <input type="tel" placeholder="" />
                    </div>

                    <div className="form-field">
                      <label>Asunto</label>
                      <input type="text" placeholder="" />
                    </div>

                    <div className="form-field full-width">
                      <label>Mensaje</label>
                      <textarea placeholder=""></textarea>
                    </div>

                    <button 
                      className="submit-button"
                      onClick={() => alert('Mensaje enviado (demo)')}
                    >
                      ENVIAR MENSAJE
                    </button>
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
              <h2>Aprende a conducir con confianza y seguridad</h2>
              <span>
                <i className="fa-solid fa-car"></i>
              </span>
            </div>
          </div>
        </div>
        
        <Footer />
      </section>
    </>
  );
}

export default Contact;