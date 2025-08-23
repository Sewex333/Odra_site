import React from 'react';
import { motion } from "framer-motion";
import Navbar from './Navbar';
import "../About.css";
import Footer from './Footer';
import one from '../assets/images/tak.JPG';
import dwa from '../assets/images/trzy.JPG';
import trzy from '../assets/images/oplaty_zdjecie.jpg';
import cztery from '../assets/images/nuen.jpg';
import five from '../assets/images/cztey.jpg';
import { Link } from 'react-router';

function About() {
  return (
    <>
      <Navbar />
      <div className="container bg-gray-50 text-gray-800 py-12">

        {/* O nas */}
        <motion.div 
          className="section-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div id="onas" className="blok bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-red-600 text-3xl font-bold mb-6">⚽ O Odrze Szczecin:</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              Odra Szczecin to klub z bogatą historią sięgającą roku 1945, oferujący nowoczesne podejście do szkolenia piłkarskiego z indywidualnym dostosowaniem do każdego zawodnika.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nasze treningi bazują na zachodnich wzorcach z Niemiec, Holandii i Portugalii. Skupiamy się na rozwoju technicznym, motorycznym, taktycznym i mentalnym.
              <span className="text-red-600 font-semibold"> Trening mentalny to przyszłość sportu – my już to wdrażamy!</span>
            </p>
          </div>
          <img src={one} alt="Odra Szczecin" className="about-image rounded-lg shadow-lg" />
        </motion.div>

        {/* Treningi */}
        <motion.div 
          className="section-row reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={dwa} alt="Treningi" className="about-image rounded-lg shadow-lg" />
          <div id="treningi" className="blok bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-red-600 text-3xl font-bold mb-6">🏋️ Treningi:</h1>
            <p className="text-gray-700 leading-relaxed mb-3">
              Treningi odbywają się w nowoczesnych lokalizacjach: <strong className="text-gray-800">MOSiR Szczecin, Witkiewicza, Kresowa</strong> i <strong className="text-gray-800">Bandurskiego</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">Która lokalizacja najbardziej Państwu odpowiada?</p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Pierwsze <strong className="text-red-600">3 zajęcia próbne</strong> są całkowicie <span className="highlight text-red-600 font-bold bg-red-50 px-2 py-1 rounded">bezpłatne</span>.
            </p>
            <p className="text-gray-700 leading-relaxed">W okresach zimowym i letnim lokalizacje mogą ulec niewielkim zmianom.</p>
          </div>
        </motion.div>

        {/* Opłaty */}
        <motion.div 
          className="section-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div id="oplaty" className="blok bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-red-600 text-3xl font-bold mb-6">💸 Opłaty:</h1>
            <p className="text-gray-700 leading-relaxed mb-4">Opłata miesięczna pobierana jest z góry i zależy od liczby treningów:</p>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="span1 text-red-600 font-semibold text-lg">Do 13. roku życia (U13 i młodsze):</span><br />
                <span className="ml-4 block mt-2 text-gray-600">1–4 treningi: <strong>160 zł</strong></span><br />
                <span className="ml-4 block text-gray-600">5–8 treningów: <strong>200 zł</strong></span><br />
                <span className="ml-4 block text-gray-600">12–16 treningów: <strong>240 zł</strong></span>
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <span className="span1 text-red-600 font-semibold text-lg">Powyżej 14. roku życia (ODRA SZCZECIN 1945):</span><br />
                <span className="ml-4 block mt-2 text-gray-600">U14/U15: <strong>200 zł</strong></span><br />
                <span className="ml-4 block text-gray-600">U16/U17: <strong>180 zł</strong></span><br />
                <span className="ml-4 block text-gray-600">U18/U19: <strong>120 zł</strong></span>
              </p>
            </div>
          </div>
          <img src={trzy} alt="Opłaty" className="about-image rounded-lg shadow-lg" />
        </motion.div>

        {/* Dodatkowe informacje */}
        <motion.div 
          className="section-row reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src={cztery} alt="Informacje" className="about-image rounded-lg shadow-lg" />
          <div id="info" className="blok bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-red-600 text-3xl font-bold mb-6">ℹ️ Dodatkowe informacje:</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              Po 3 darmowych zajęciach wymagamy wypełnienia dokumentów oraz zakupu stroju klubowego.<br />
              <strong className="text-gray-800 bg-red-50 px-2 py-1 rounded">Zestaw: 500 zł</strong> Adidas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              W skład zestawu wchodzą: koszulka, spodenki, getry, dresy, spodnie, torba lub plecak.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dostępne są promocje abonamentowe z rabatami <strong className="text-red-600">od 10% do 50%</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Terminy treningów znajdują się w systemie <strong className="text-gray-800">PROTRAINUP</strong> – dostęp po aktywacji konta.
            </p>
          </div>
        </motion.div>

        {/* Obozy */}
        <motion.div 
          className="section-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div id="obozy" className="blok bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-red-600 text-3xl font-bold mb-6">🏕️ Obozy i półkolonie:</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              Organizujemy wyjazdowe obozy sportowe oraz półkolonie – są one <strong className="text-red-600">obowiązkową częścią szkolenia</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Więcej informacji znajdziecie w zakładce 
              <Link to="/obozy-i-polkolonie">
                <button className='ml-2 border border-red-600 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 shadow-md hover:shadow-lg'>
                  Obozy i półkolonie
                </button>
              </Link>
            </p>
            <p className="text-gray-700 leading-relaxed">
              W razie pytań – jesteśmy do dyspozycji! 🤝
            </p>
          </div>
          <img src={five} alt="Obozy" className="about-image rounded-lg shadow-lg" />
        </motion.div>

      </div>
      <Footer />
    </>
  );
}

export default About;