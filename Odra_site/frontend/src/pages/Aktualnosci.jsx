import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Aktualnosci = () => {
  const [aktualnosci, setAktualnosci] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAktualnosci = async () => {
      try {
        const response = await fetch('/api/aktualnosci');
        if (!response.ok) throw new Error('Problem z pobraniem danych');
        const data = await response.json();
        setAktualnosci(data);
      } catch (error) {
        console.error('Błąd:', error);
        setError('Nie udało się załadować aktualności');
      } finally {
        setLoading(false);
      }
    };
    fetchAktualnosci();
  }, []);

  const AktualnoscCard = ({ aktualnosc, index }) => (
    <motion.div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${aktualnosc.wyrozniany ? 'border-red-500' : 'border-gray-200'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center">
        <div className="text-4xl mb-2">{aktualnosc.obrazek}</div>
        <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
          {aktualnosc.kategoria}
        </span>
        {aktualnosc.wyrozniany && (
          <div className="mt-2">
            <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-bold">
              WYRÓŻNIONE
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">{aktualnosc.data}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{aktualnosc.tytul}</h3>
        <p className="text-gray-600 mb-4">{aktualnosc.opis}</p>
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
            <p className="text-gray-600">Ładowanie aktualności...</p>
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
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white text-2xl shadow-lg">
                📰
              </div>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Aktualności
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Bądź na bieżąco z najnowszymi wydarzeniami z życia Odry Szczecin. 
              Sukcesy naszych zawodników, informacje o treningach i nadchodzące wydarzenia.
            </motion.p>
          </div>
        </section>

        {/* AKTUALNOŚCI */}
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
                Największe Osiągniecia
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
            </motion.div>
            
            {aktualnosci.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Brak aktualności. Sprawdź później!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {aktualnosci.map((aktualnosc, index) => (
                  <AktualnoscCard key={aktualnosc.id} aktualnosc={aktualnosc} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FACEBOOK SEKCJA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Śledź nas na Facebook
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4">
                 Najnowsze zdjęcia z treningów, relacje z meczów i ważne informacje
              </p>
            </motion.div>
            
            <div className="flex justify-center">
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F1945odra&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="500"
                  height="700"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SEKCJA */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white text-2xl shadow-lg">
                📧
              </div>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Odra Szczecin
            </motion.h2>
            <motion.p 
              className="text-xl mb-6 text-gray-200 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              ⚽ Chcesz rozwijać swoje umiejętności w profesjonalnym środowisku?
            </motion.p>
            <motion.p 
              className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Dołącz do <strong>Odry Szczecin</strong> – klubu, który stawia na pasję, rozwój i ducha zespołu. Jesteśmy miejscem, gdzie talent spotyka możliwości.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/formularz"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Skontaktuj się
              </Link>
            </motion.div>
          </div>
        </section>

        {/* STATYSTYKI */}
        <section className="py-16 bg-gray-100">
          <motion.div 
            className="max-w-7xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "250+", label: "Zawodników" },
                { number: "15+", label: "Trenerów" },
                { number: "12", label: "Turniejów" },
                { number: "1945", label: "Tradycja od" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Aktualnosci;