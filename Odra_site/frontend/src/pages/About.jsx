import React from 'react';
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
      <div className="container bg-white text-gray-800 py-12">

        {/* O nas */}
        <div className="section-row">
          <div id="onas" className="blok">
            <h1 className="text-red-500 text-3xl font-bold mb-4">⚽ O Future Football Club:</h1>
            <p>
              Future Football Club to założona w sezonie 2017/2018 nowoczesna organizacja sportowa, oferująca indywidualne podejście do każdego zawodnika.
            </p>
            <p>
              Nasze treningi bazują na zachodnich wzorcach z Niemiec, Holandii i Portugalii. Skupiamy się na rozwoju technicznym, motorycznym, taktycznym i mentalnym.
              <span className="text-red-500 font-semibold"> Trening mentalny to przyszłość sportu – my już to wdrażamy!</span>
            </p>
          </div>
          <img src={one} alt="Future" className="about-image rounded-lg shadow-lg" />
        </div>

        {/* Treningi */}
        <div className="section-row reverse">
          <img src={dwa} alt="Treningi" className="about-image rounded-lg shadow-lg" />
          <div id="treningi" className="blok">
            <h1 className="text-red-500 text-3xl font-bold mb-4">🏋️ Treningi:</h1>
            <p>Treningi odbywają się głównie w lokalizacjach: <strong className="text-black">Niebuszewo, Centrum</strong> i <strong className="text-black">Gumieńce</strong>.</p>
            <p>Która lokalizacja najbardziej Państwu odpowiada?</p>
            <p>Pierwsze <strong className="text-red-500">3 zajęcia próbne</strong> są całkowicie <span className="highlight text-red-500 font-bold">bezpłatne</span>.</p>
            <p>W okresach zimowym i letnim lokalizacje mogą ulec niewielkim zmianom.</p>
          </div>
        </div>

        {/* Opłaty */}
        <div className="section-row">
          <div id="oplaty" className="blok">
            <h1 className="text-red-500 text-3xl font-bold mb-4">💸 Opłaty:</h1>
            <p>Opłata miesięczna pobierana jest z góry i zależy od liczby treningów:</p>
            <p>
              <span className="span1 text-red-500 font-semibold">Do 13. roku życia (U13 i młodsze – FUTURE):</span><br />
              1–4 treningi: 160 zł<br />
              5–8 treningów: 200 zł<br />
              12–16 treningów: 240 zł
            </p>
            <p>
              <span className="span1 text-red-500 font-semibold">Powyżej 14. roku życia (U14+ – ODRA SZCZECIN 1945):</span><br />
              U14/U15: 200 zł<br />
              U16/U17: 180 zł<br />
              U18/U19: 120 zł
            </p>
          </div>
          <img src={trzy} alt="Opłaty" className="about-image rounded-lg shadow-lg" />
        </div>

        {/* Dodatkowe informacje */}
        <div className="section-row reverse">
          <img src={cztery} alt="Informacje" className="about-image rounded-lg shadow-lg" />
          <div id="info" className="blok">
            <h1 className="text-red-500 text-3xl font-bold mb-4">ℹ️ Dodatkowe informacje:</h1>
            <p>Po 3 darmowych zajęciach wymagamy wypełnienia dokumentów oraz zakupu stroju klubowego.<br /><strong className="text-black">Zestaw: 500 zł</strong> Adidas.</p>
            <p>W skład zestawu wchodzą: koszulka, spodenki, getry, dresy, spodnie, torba lub plecak.</p>
            <p>Dostępne są promocje abonamentowe z rabatami <strong className="text-red-500">od 10% do 50%</strong>.</p>
            <p>Terminy treningów znajdują się w systemie <strong className="text-black">PROTRAINUP</strong> – dostęp po aktywacji konta.</p>
          </div>
        </div>

        {/* Obozy */}
        <div className="section-row">
          <div id="obozy" className="blok">
            <h1 className="text-red-500 text-3xl font-bold mb-4">🏕️ Obozy i półkolonie:</h1>
            <p>Organizujemy wyjazdowe obozy sportowe oraz półkolonie – są one <strong className="text-red-500">obowiązkową częścią szkolenia</strong>.</p>
            <p>Więcej informacji znajdziecie w zakładce 
              <Link to="/obozy-i-polkolonie">
                <button className='ml-2 border border-red-500 bg-red-500 text-white px-4 py-1 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition-colors cursor-pointer'>
                  Obozy i półkolonie
                </button>
              </Link>
            </p>
            <p>W razie pytań – jesteśmy do dyspozycji! 🤝</p>
          </div>
          <img src={five} alt="Obozy" className="about-image rounded-lg shadow-lg" />
        </div>

      </div>
      <Footer />
    </>
  );
}

export default About;
