import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const TreningiIndywidualne = () => {
  const obszary = [
    {
      ikona: "⚽",
      tytul: "Technika Piłkarska",
      opis: "Doskonalenie prowadzenia piłki, podań, przyjęć i strzelania"
    },
    {
      ikona: "🏃",
      tytul: "Koordynacja i Zwinność",
      opis: "Rozwój motoryki, równowagi i szybkości reakcji"
    },
    {
      ikona: "🎯",
      tytul: "Precyzja i Celność",
      opis: "Trening celności strzałów i dokładności podań"
    },
    {
      ikona: "🧠",
      tytul: "Inteligencja Gry",
      opis: "Analiza sytuacji, podejmowanie decyzji i czytanie gry"
    },
    {
      ikona: "💪",
      tytul: "Siła Funkcjonalna",
      opis: "Budowanie siły specyficznej dla piłki nożnej"
    },
    {
      ikona: "🏃‍♂️",
      tytul: "Kondycja Specjalna",
      opis: "Wytrzymałość, szybkość i eksplozywność"
    }
  ];

  const cennik = [
    {
      typ: "Trening próbny",
      cena: "50 zł",
      opis: "Pierwszy trening - poznanie i ocena umiejętności"
    },
    {
      typ: "Pojedyncza sesja",
      cena: "200 zł",
      opis: "Trening 1 na 1 - pełne skupienie na Twoich potrzebach"
    },
    {
      typ: "Pakiet 4 treningi",
      cena: "600 zł",
      opis: "Miesięczny pakiet - systematyczny rozwój"
    },
    {
      typ: "Pakiet 8 treningów",
      cena: "1000 zł",
      opis: "Najlepsze efekty - intensywny program rozwoju"
    }
  ];

  const treningiGrupowe = [
    {
      liczba: "2 osoby",
      cena: "100 zł/os.",
      opis: "Trening w duecie - więcej uwagi dla każdego"
    },
    {
      liczba: "3 osoby", 
      cena: "85 zł/os.",
      opis: "Optymalna grupa - motywacja i rywalizacja"
    },
    {
      liczba: "4 osoby",
      cena: "70 zł/os.", 
      opis: "Ekonomiczna opcja z zachowaniem jakości"
    }
  ];

  const OszarCard = ({ obszar }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4 text-center">{obszar.ikona}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{obszar.tytul}</h3>
      <p className="text-gray-600 text-center text-sm">{obszar.opis}</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Treningi <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Indywidualne</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Spersonalizowane sesje treningowe z trenerem UEFA A. 
              Rozwijaj umiejętności pod okiem doświadczonego trenera i osiągnij swój pełny potencjał.
            </p>
          </div>
        </div>

        {/* O trenerze */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">O Trenerze</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">Kwalifikacje:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Licencja UEFA A (jeden z najmłodszych w woj. zachodniopomorskim)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Certyfikowany sportowy trener mentalny
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Medyk z kursem kwalifikowanej pierwszej pomocy
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Doświadczenie od 2016 roku
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-600 mb-4">Doświadczenie:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Staże: Hannover 96, VFL Wolfsburg, Legia Warszawa
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Współpraca z ZZPN (trener analityk)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Akademia Pogoń Szczecin (2016-2018)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Koordynator Future FC (250+ zawodników)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">8+</div>
                <div className="text-gray-600">Lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">UEFA A</div>
                <div className="text-gray-600">Licencja trenera</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800 mb-2">60</div>
                <div className="text-gray-600">Minut sesji</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Obszary treningowe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {obszary.map((obszar, index) => (
                <OszarCard key={index} obszar={obszar} />
              ))}
            </div>
          </div>
        </section>

        {/* Cennik */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cennik - Treningi 1 na 1
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cennik.map((pakiet, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{pakiet.typ}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">{pakiet.cena}</div>
                  <p className="text-gray-600 text-sm">{pakiet.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treningi grupowe */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Treningi w małych grupach (2-4 osoby)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {treningiGrupowe.map((grupa, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border-2 border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{grupa.liczba}</h3>
                  <div className="text-2xl font-bold text-red-600 mb-4">{grupa.cena}</div>
                  <p className="text-gray-600 text-sm">{grupa.opis}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600">Pakiety miesięczne w korzystnych cenach - szczegóły do ustalenia</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Jak wygląda proces treningowy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Poznajemy się</h3>
                <p className="text-gray-600 text-sm">Przeprowadzamy testy i analizujemy Twój potencjał</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Plan działania</h3>
                <p className="text-gray-600 text-sm">Ustalamy spersonalizowany plan treningowy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Realizacja treningu</h3>
                <p className="text-gray-600 text-sm">Trenujesz indywidualnie lub w grupie do 4 osób</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Weryfikacja postępów</h3>
                <p className="text-gray-600 text-sm">Sprawdzamy efekty i ustalamy kolejne cele</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Zacznij swoją drogę do <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">sukcesu</span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Umów się na trening próbny za 50 zł i odkryj swój potencjał z trenerem UEFA A
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg cursor-pointer">
                  Umów trening próbny
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TreningiIndywidualne;