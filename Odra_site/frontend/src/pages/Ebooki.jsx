import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router';

const Ebooki = () => {
  const [ebooki, setEbooki] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadMessage, setDownloadMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    // Zastąpiono localStorage zwykłą zmienną state - localStorage nie jest dostępne w artifacts
    const isSubmitted = false; // Można to zmienić na true do testowania
    setFormSent(isSubmitted);

    const fetchEbooki = async () => {
      try {
        const response = await fetch('/api/ebooki');
        if (!response.ok) throw new Error('Problem z pobraniem danych');
        const data = await response.json();
        setEbooki(data);
      } catch (error) {
        console.error('Błąd:', error);
        setError('Nie udało się załadować e-booków');
      } finally {
        setLoading(false);
      }
    };
    fetchEbooki();
  }, []);

  const handleDownload = (pdfPath, tytul) => {
    if (!formSent) {
      setDownloadMessage("Wypełnij formularz, aby pobrać e-book.");
      setTimeout(() => setDownloadMessage(''), 3000);
      return;
    }

    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = tytul.replace(/[^\w\s]/gi, '') + '.pdf';
    link.click();

    setDownloadMessage(`Pobieranie "${tytul}" rozpoczęte!`);
    setTimeout(() => setDownloadMessage(''), 3000);
  };

  const EbookCard = ({ ebook, index }) => (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center">
        <div className="text-4xl mb-2">{ebook.ikona}</div>
        <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
          E-BOOK PDF
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{ebook.tytul}</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">{ebook.opis}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Co znajdziesz w e-booku:</h4>
          <ul className="space-y-1">
            {ebook.zawiera.map((item, idx) => (
              <li key={idx} className="flex items-center text-xs text-gray-600">
                <span className="text-red-600 mr-2 text-sm">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => handleDownload(ebook.pdfPath, ebook.tytul)}
          disabled={!formSent}
          className={`w-full px-6 py-3 rounded-lg font-semibold text-sm flex items-center justify-center transition-colors duration-200 ${
            formSent
              ? 'bg-red-600 text-white hover:bg-red-700 cursor-pointer'
              : 'bg-gray-400 text-white cursor-not-allowed'
          }`}
        >
          <span className="mr-2">📥</span>
          {formSent ? 'Pobierz PDF' : 'Wypełnij formularz'}
        </button>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-4"></div>
            <p className="text-gray-600">Ładowanie e-booków...</p>
          </motion.div>
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
          <motion.div 
            className="text-center bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-xl text-gray-800 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold transition-colors"
            >
              Spróbuj ponownie
            </button>
          </motion.div>
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
        <section className="relative h-[50vh] overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.div 
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white text-2xl mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              📚
            </motion.div>
            <motion.h1
              className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              E-booki <span className="text-red-500">Odry</span>
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg max-w-4xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Rozwijaj swoje umiejętności z naszymi darmowymi e-bookami. 
              Profesjonalne treści stworzone przez ekspertów dla zawodników i rodziców.
            </motion.p>
          </div>
        </section>

        {/* DOWNLOAD MESSAGE */}
        {downloadMessage && (
          <motion.div 
            className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded mx-4 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center font-semibold">{downloadMessage}</p>
          </motion.div>
        )}

        {/* EBOOKI SECTION */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Darmowe E-booki
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4">
                Pobierz nasze e-booki i rozwijaj swoją wiedzę o sporcie
              </p>
            </motion.div>
            
            {ebooki.length === 0 ? (
              <motion.div 
                className="text-center py-12 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-400 text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">E-booki w przygotowaniu</h3>
                <p className="text-gray-600 mb-6">Pracujemy nad wartościowymi materiałami edukacyjnymi. Sprawdź wkrótce!</p>
                <Link 
                  to="/kontakt"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Skontaktuj się z nami
                </Link>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {ebooki.map((ebook, index) => (
                    <EbookCard key={ebook.id} ebook={ebook} index={index} />
                  ))}
                </div>

                {!formSent && (
                  <motion.div 
                    className="text-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link 
                      to="/formularz"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      Wypełnij formularz, aby pobrać e-booki
                    </Link>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ZALETY SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-8 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Dlaczego nasze e-booki?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { ikona: "⚡", tytul: "Całkowicie darmowe", opis: "Pobierz i korzystaj bez żadnych opłat" },
                { ikona: "👨‍🏫", tytul: "Materiały od ekspertów", opis: "Stworzone przez doświadczonych trenerów Odry" },
                { ikona: "📱", tytul: "Dostępne 24/7", opis: "Pobierz kiedy chcesz, ile razy chcesz" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{item.ikona}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.tytul}</h3>
                  <p className="text-gray-600">{item.opis}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div 
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center border-4 border-white text-2xl mx-auto mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              📧
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-red-500">Odra</span> Szczecin
            </motion.h2>
            <motion.p 
              className="text-xl mb-6 opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              ⚽ Chcesz rozwijać swoje umiejętności w profesjonalnym środowisku?
            </motion.p>
            <motion.p 
              className="text-lg mb-10 opacity-80 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Dołącz do <strong>Odry Szczecin</strong> – klubu, który stawia na pasję, rozwój i ducha zespołu.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                to="/formularz"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg"
              >
                Skontaktuj się
              </Link>
            </motion.div>
          </div>
        </section>

        {/* STATYSTYKI SECTION */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { liczba: "500+", opis: "Zawodników" },
                { liczba: "25+", opis: "Trenerów" },
                { liczba: "20", opis: "Turniejów" },
                { liczba: "1945", opis: "Tradycja od" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.liczba}</div>
                  <div className="text-gray-700 font-semibold">{stat.opis}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Ebooki;