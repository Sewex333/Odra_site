import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const ShopSite = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('/api/items');
        if (!res.ok) throw new Error('Błąd sieci');
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error('Błąd pobierania produktów:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-[50vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sklep <span className="text-red-500">Odry</span>
          </motion.h1>
          <motion.p
            className="text-gray-200 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Oficjalne produkty klubu - koszulki, gadżety i akcesoria dla prawdziwych fanów
          </motion.p>
        </div>
      </section>

      <main className="flex-grow py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
              <p className="text-gray-600 text-lg">Ładowanie produktów...</p>
            </motion.div>
          ) : error ? (
            <motion.div 
              className="text-center bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ups! Coś poszło nie tak</h3>
              <p className="text-gray-600 mb-6">Nie udało się załadować produktów. Spróbuj ponownie później.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Spróbuj ponownie
              </button>
            </motion.div>
          ) : items.length === 0 ? (
            <motion.div 
              className="text-center bg-white rounded-lg shadow-lg p-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-400 text-6xl mb-4">🏪</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sklep w przygotowaniu</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Pracujemy nad uruchomieniem naszego sklepu z oficjalnymi produktami Odry Szczecin. 
                Wkrótce będzie dostępna pełna oferta!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/kontakt"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Skontaktuj się z nami
                </Link>
                <Link 
                  to="/"
                  className="bg-white text-red-600 hover:bg-gray-100 border border-red-600 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Wróć do strony głównej
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/sklep/${item.id}`}
                    className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-200 hover:border-red-500 group"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        ODRA
                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-2xl font-extrabold text-red-600">
                      {item.price.toFixed(2)} zł
                    </p>
                    <div className="mt-4 bg-gray-100 group-hover:bg-red-600 text-gray-700 group-hover:text-white px-4 py-2 rounded-lg text-center font-semibold transition-all duration-300">
                      Zobacz produkt
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </main>

      {/* INFORMACJE DODATKOWE */}
      {!loading && !error && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚚</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Darmowa dostawa</h3>
                <p className="text-gray-600 text-sm">Przy zamówieniach powyżej 150 zł</p>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✅</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Oficjalne produkty</h3>
                <p className="text-gray-600 text-sm">100% oryginalne produkty klubowe</p>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">↩️</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Zwroty i reklamacje</h3>
                <p className="text-gray-600 text-sm">30 dni na zwrot bez podania przyczyny</p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ShopSite;