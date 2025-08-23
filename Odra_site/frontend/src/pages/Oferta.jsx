import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Oferta = () => {
  const [oferty, setOferty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOferty = async () => {
      try {
        const response = await fetch('/api/oferty');
        if (!response.ok) throw new Error('Problem z pobraniem danych');
        const data = await response.json();
        setOferty(data);
      } catch (error) {
        console.error('Błąd:', error);
        setError('Nie udało się załadować ofert');
      } finally {
        setLoading(false);
      }
    };
    fetchOferty();
  }, []);

  const OfferCard = ({ oferta, index }) => (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={`h-32 bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center relative`}>
        <div className="text-6xl">{oferta.ikona}</div>
        <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-4 h-4 bg-red-600 rounded-full"></div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{oferta.nazwa}</h3>
          <span className="bg-red-100 text-red-800 text-sm px-3 py-1 rounded-full font-semibold">
            {oferta.poziom}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{oferta.opis}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Program zawiera:</h4>
          <ul className="space-y-1">
            {Array.isArray(oferta.features) ? (
              oferta.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <span className="text-red-600 mr-2 font-bold">⚽</span>
                  {feature}
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-600">Brak informacji</li>
            )}
          </ul>
        </div>

        <Link to={oferta.link}>
          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
            Sprawdź szczegóły
          </button>
        </Link>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-4"></div>
            <p className="text-gray-600">Ładowanie ofert...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center text-red-600">
            <p className="text-xl">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              Spróbuj ponownie
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* HERO SECTION */}
        <section className="relative bg-black text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <div className="text-3xl">⚽</div>
              </div>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Treningi Piłkarskie Odry Szczecin
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Odkryj swoją pasję do piłki nożnej! Nasze programy treningowe pomogą Ci rozwinąć umiejętności techniczne, taktyczne i fizyczne. Dołącz do grona zawodników, którzy realizują swoje futbolowe marzenia nad Odrą.
            </motion.p>
          </div>
        </section>

        {/* STATYSTYKI */}
        <section className="py-16 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Wyszkolonych zawodników", color: "text-red-600" },
                { number: "1945", label: "Tradycja od", color: "text-gray-800" },
                { number: "250+", label: "Aktywnych Zawodników", color: "text-red-600" },
                { number: "100%", label: "Zaangażowania", color: "text-gray-800" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="border-r border-gray-200 last:border-r-0 px-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* OFERTY */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Znajdź swój idealny program treningowy
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
            </motion.div>
            
            {oferty.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Brak dostępnych ofert. Sprawdź później!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {oferty.map((oferta, index) => (
                  <OfferCard key={oferta.id} oferta={oferta} index={index} />
                ))}
              </div>
            )}
            
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Treningi zespołowe</h3>
              <p className="text-gray-600 mb-6">
                Oferujemy treningi zespołowe dla różnych kategorii wiekowych i poziomów zaawansowania. Nasze programy są dostosowane do potrzeb zawodników, od początkujących po zaawansowanych, i skupiają się na rozwoju techniki, taktyki oraz kondycji fizycznej.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Kategorie wiekowe:</h4>
                  <ul className="space-y-2">
                    {[
                      "Treningi dla juniorów (U10, U12, U14)",
                      "Treningi dla seniorów",
                      "Treningi dla drużyn kobiecych",
                      "Indywidualne sesje z trenerem"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-red-600 mr-2">⚽</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Nasza oferta obejmuje:</h4>
                  <ul className="space-y-2">
                    {[
                      "Profesjonalne zaplecze treningowe",
                      "Doświadczeni i wykwalifikowani trenerzy", 
                      "Nowoczesne metody treningowe",
                      "Udział w turniejach i rozgrywkach"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-red-600 mr-2">🏆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA SEKCJA */}
        <section className="relative py-20 bg-black text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-20"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <div className="text-4xl">🏆</div>
              </div>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Rozpocznij swoją piłkarską przygodę już dziś!
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Dołącz do Odry Szczecin i rozwijaj swoje umiejętności pod okiem doświadczonych trenerów
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <a href="/#form" className="inline-block">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Umów trening próbny
                </button>
              </a>
              <Link to="/kontakt" className="inline-block">
                <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Skontaktuj się z nami
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Oferta;