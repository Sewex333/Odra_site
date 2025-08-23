import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Treningi = () => {
  const grupy = [
    {
      ikona: "⚽",
      tytul: "Dzieci (4–8 lat)",
      opis: "Pierwszy kontakt z piłką przez zabawę i gry motoryczne",
      szczegoly: [
        "Rozwój koordynacji i równowagi",
        "Nauka pracy w grupie",
        "Podstawowe umiejętności techniczne",
        "Pozytywny coaching i budowanie pewności siebie"
      ]
    },
    {
      ikona: "🥅",
      tytul: "Podstawowe (9–12 lat)",
      opis: "Fundamenty gry: technika, dyscyplina i fair play",
      szczegoly: [
        "Podania, przyjęcia, drybling",
        "Ustawianie się na boisku",
        "Mini-turnieje i testy rozwojowe",
        "Komunikacja i odpowiedzialność"
      ]
    },
    {
      ikona: "💪",
      tytul: "Zaawansowane (13–15 lat)",
      opis: "Taktyka, rywalizacja i rozwój mentalny",
      szczegoly: [
        "Schematy gry ofensywnej i defensywnej",
        "Gra w różnych ustawieniach",
        "Podejmowanie decyzji pod presją",
        "Elementy mentalne i integracyjne"
      ]
    },
    {
      ikona: "🧠",
      tytul: "Specjalistyczne",
      opis: "Bramkarskie i indywidualne treningi",
      szczegoly: [
        "Treningi mentalne: wizualizacja i koncentracja",
        "Bramkarskie: reakcja, ustawienie, gra nogami",
        "Indywidualne: technika, dynamika, koncentracja",
        "Analiza wideo dla optymalnego rozwoju"
      ]
    },
    {
      ikona: "🔴",
      tytul: "Seniorzy (A-Klasa)",
      opis: "Profesjonalne treningi dla dorosłych pasjonatów",
      szczegoly: [
        "Wysoka intensywność treningów",
        "Mecze sparingowe i ligowe",
        "Motywująca atmosfera",
        "Jasna ścieżka rozwoju"
      ]
    }
  ];

  const GrupaCard = ({ grupa, index }) => (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-4xl mb-4 text-center">{grupa.ikona}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{grupa.tytul}</h3>
      <p className="text-gray-600 text-center text-sm mb-4">{grupa.opis}</p>
      <ul className="space-y-2">
        {grupa.szczegoly.map((szczegol, idx) => (
          <li key={idx} className="flex items-start">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span className="text-gray-700">{szczegol}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Treningi dla <span className="text-red-500">Wszystkich</span>
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Dołącz do Odry Szczecin – miejsca, gdzie pasja do piłki nożnej łączy pokolenia! Oferujemy treningi dla każdej grupy wiekowej, od najmłodszych po dorosłych, w atmosferze wsparcia i rozwoju.
            </motion.p>
          </div>
        </div>

        {/* STATYSTYKI */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600">Zawodników</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-3xl font-bold text-red-600 mb-2">1945</div>
                <div className="text-gray-600">Tradycja od</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-gray-800 mb-2">8</div>
                <div className="text-gray-600">Grup treningowych</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GRUPY TRENINGOWE */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nasze grupy treningowe
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {grupy.map((grupa, index) => (
                <GrupaCard key={index} grupa={grupa} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* DLACZEGO WARTO */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Dlaczego warto do nas dołączyć?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  numer: "1",
                  tytul: "Spersonalizowany rozwój",
                  opis: "Indywidualne podejście do każdego zawodnika, niezależnie od wieku"
                },
                {
                  numer: "2", 
                  tytul: "Motywująca atmosfera",
                  opis: "Wspieramy pasję i budujemy wspólnotę w tradycjach Odry"
                },
                {
                  numer: "3",
                  tytul: "Nowoczesne metody", 
                  opis: "Treningi oparte na analizie wideo i najlepszych praktykach"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">{item.numer}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.tytul}</h3>
                  <p className="text-gray-600 text-sm">{item.opis}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Zacznij swoją <span className="text-red-500">piłkarską przygodę</span>
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Niezależnie od wieku, u nas znajdziesz miejsce do rozwoju swojej pasji. Zapisz się na bezpłatną konsultację i dołącz do Odry Szczecin!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/kontakt">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg cursor-pointer">
                  Zapisz się teraz
                </button>
              </Link>
              <Link to="/">
                <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg cursor-pointer">
                  Wróć do strony głównej
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

export default Treningi;