import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Obozy = () => {
  const [obozy, setObozy] = useState([]);
  const [polkolonie, setPolkolonie] = useState([]);

  useEffect(() => {
    const fetchObozy = async () => {
      try {
        const response = await fetch("/api/obozy");
        const data = await response.json();
        setObozy(data.filter(item => item.type === 'oboz'));
        setPolkolonie(data.filter(item => item.type === 'polkolonia'));
      } catch (error) {
        console.error('Błąd pobierania obozów:', error);
      }
    };
    
    fetchObozy();
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] bg-fixed bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/glowna-obozy.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div 
          className="text-center bg-black/80 p-8 rounded-2xl border-2 border-red-500 relative z-10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-3xl">⚽</div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">
            Obozy i Półkolonie Lato 2025
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Niezapomniane wakacje z Odrą Szczecin!
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* OBOZY SECTION */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-4xl">🏕️</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
            Obozy Piłkarskie
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Intensywne szkolenie w malowniczych lokalizacjach z profesjonalną opieką trenerską
          </p>
        </motion.div>

        {obozy.map((camp, index) => (
          <motion.div 
            key={camp.id} 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src={camp.image} 
                  alt={camp.title} 
                  className="rounded-xl object-cover w-full h-64 border-2 border-gray-200" 
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  OBÓZ 2025
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{camp.title}</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-red-600">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="text-red-600 mr-3">📅</span>
                      <strong>Termin:</strong> <span className="ml-2">{camp.date}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-600 mr-3">📍</span>
                      <strong>Miejsce:</strong> <span className="ml-2">{camp.place}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-600 mr-3">💰</span>
                      <strong>Cena:</strong> <span className="ml-2 text-red-600 font-bold">{camp.price}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">⚽</span>
                      <div>
                        <strong>W cenie:</strong> 
                        <span className="ml-2 block text-gray-600">{camp.details}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  {camp.documentLink && (
                    <a 
                      href={camp.documentLink} 
                      download 
                      className="bg-red-600 text-white font-bold px-5 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                    >
                      📄 Dokumenty
                    </a>
                  )}
                  {camp.sport_kart && (
                    <a 
                      href={camp.sport_kart} 
                      download 
                      className="bg-white border-2 border-red-600 text-red-600 font-bold px-5 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors shadow-lg"
                    >
                      ⚕️ Karta zdrowia
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-2xl font-semibold text-red-600 mb-3 flex items-center">
                  <span className="mr-3">ℹ️</span> Szczegóły programu
                </h4>
                <p className="text-gray-700 leading-relaxed">{camp.szczegoly}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-red-600 mb-3 flex items-center">
                  <span className="mr-3">💳</span> Dokumenty i płatność
                </h4>
                <p className="text-gray-700 leading-relaxed">{camp.platnosc}</p>
              </div>

              {camp.documents && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-red-600 mb-3 flex items-center">
                    <span className="mr-3">📋</span> Wymagane dokumenty
                  </h4>
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed">{camp.documents}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* PÓŁKOLONIE SECTION */}
        <motion.div 
          className="text-center mb-16 pt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
              <div className="text-4xl">🌞</div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-red-600">
            Półkolonie Letnie Szczecin 2025
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Codzienne treningi i zabawa w rodzinnej atmosferze Odry Szczecin
          </p>
        </motion.div>

        {polkolonie.map((camp, index) => (
          <motion.div 
            key={camp.id} 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img 
                  src={camp.image} 
                  alt={camp.title} 
                  className="rounded-xl object-cover w-full h-64 border-2 border-gray-200" 
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                  PÓŁKOLONIA 2025
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">{camp.title}</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-red-600">
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="text-red-600 mr-3">📅</span>
                      <strong>Termin:</strong> <span className="ml-2">{camp.date}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-600 mr-3">📍</span>
                      <strong>Miejsce:</strong> <span className="ml-2">{camp.place}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-600 mr-3">💰</span>
                      <strong>Cena:</strong> <span className="ml-2 text-red-600 font-bold">{camp.price}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">🎯</span>
                      <div>
                        <strong>W programie:</strong> 
                        <span className="ml-2 block text-gray-600">{camp.details}</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link 
                  to="/formularz" 
                  className="inline-flex items-center bg-red-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  ✉️ Zarezerwuj miejsce
                </Link>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-red-600 mb-3 flex items-center">
                  <span className="mr-3">🌟</span> Dlaczego warto?
                </h4>
                <p className="text-gray-700 leading-relaxed">{camp.szczegoly}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-red-600 mb-3 flex items-center">
                  <span className="mr-3">📝</span> Jak się zapisać?
                </h4>
                <p className="text-gray-700 leading-relaxed">{camp.platnosc}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA SECTION */}
        <motion.div 
          className="relative bg-black rounded-2xl p-8 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-20"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <div className="text-4xl">🏆</div>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Nie czekaj - miejsca są ograniczone!</h3>
            <p className="text-xl mb-6 text-gray-200">
              Zapisz się już dziś i zapewnij swojemu dziecku niezapomniane wakacje z piłką nożną
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/formularz"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Zapisz się teraz
              </Link>
              <Link 
                to="/kontakt"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Obozy;