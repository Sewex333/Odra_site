import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const TreningiMentalne = () => {
  const programy = [
    {
      id: 1,
      tytul: "Pewność siebie na boisku",
      opis: "Budowanie mentalnej siły i pewności siebie podczas gry",
      ikona: "🧠",
      szczegoly: [
        "Techniki wizualizacji przed meczem",
        "Pozytywne afirmacje futbolowe",
        "Praca nad self-talk podczas gry",
        "Budowanie wiary we własne umiejętności"
      ]
    },
    {
      id: 2,
      tytul: "Radzenie sobie z porażką",
      opis: "Jak przekształcić porażkę w motywację do dalszego rozwoju",
      ikona: "💪",
      szczegoly: [
        "Analiza błędów bez negatywnych emocji",
        "Uczenie się z porażek zespołowych",
        "Szybkie odbijanie się po stracie bramki",
        "Utrzymanie koncentracji po błędach"
      ]
    },
    {
      id: 3,
      tytul: "Koncentracja i fokus",
      opis: "Techniki utrzymania pełnej koncentracji przez 90 minut",
      ikona: "🎯",
      szczegoly: [
        "Techniki oddechowe przed wykonaniem rzutu karnego",
        "Medytacja w ruchu podczas gry",
        "Utrzymanie uwagi mimo presji kibiców",
        "Fokus na bieżącym momencie gry"
      ]
    },
    {
      id: 4,
      tytul: "Presja i stres przedmeczowy",
      opis: "Opanowanie stresu przed ważnymi meczami i turniejami",
      ikona: "🏆",
      szczegoly: [
        "Rutyna przedmeczowa redukująca stres",
        "Techniki relaksacyjne w szatni",
        "Radzenie sobie z presją oczekiwań",
        "Transformacja stresu w energię pozytywną"
      ]
    }
  ];

  const cennikIndywidualny = [
    {
      typ: "Pojedynczy trening",
      cena: "300 zł",
      opis: "Sesja 1 na 1 z certyfikowanym trenerem mentalnym"
    },
    {
      typ: "Pakiet 4 treningi",
      cena: "1000 zł",
      opis: "Miesięczny program rozwoju mentalnego"
    },
    {
      typ: "Pakiet 8 treningów", 
      cena: "1600 zł",
      opis: "Kompleksowy program budowania mentalności"
    }
  ];

  const cennikGrupowy = [
    {
      typ: "Praca cykliczna",
      cena: "40 zł/os.",
      opis: "Regularne sesje dla grup min. 10 osób"
    },
    {
      typ: "Spotkanie jednorazowe",
      cena: "100 zł/os.",
      opis: "Warsztat mentalny dla grup min. 10 osób"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-20">
        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-20"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center border-4 border-white text-2xl">
                🧠
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              Treningi Mentalne
            </h1>
            <p className="text-xl text-center opacity-90 max-w-4xl mx-auto leading-relaxed">
              Mentalność w Odrze to podstawa. Bez mentalności wszystkie inne aspekty często schodzą na drugi plan. 
              Dlatego kładziemy ogromny nacisk na budowanie silnej psychiki naszych zawodników. 
              Wierzymy, że prawdziwa przewaga rodzi się w umyśle - to tam podejmowane są najważniejsze decyzje, 
              które decydują o sukcesie na boisku. 
            </p>
          </div>
        </div>

        {/* O trenerze mentalnym */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Certyfikowany Trener Mentalny</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Oficjalnie Certyfikowany Sportowy Trener Mentalny</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-4">Dalszy rozwój:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Akademia Trenerów Mentalnych (u Jakuba B. Bączka) - październik 2025
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Staż w Union Berlin i Hertha Berlin - październik 2025
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-4">Doświadczenie:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Praca z zawodnikami od U6 do Senior
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Doświadczenie w pracy z 250+ zawodnikami
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Programy Treningowe
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Kompleksowe podejście do rozwoju mentalnego młodych piłkarzy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programy.map(program => (
                <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
                    <div className="text-4xl mb-2">{program.ikona}</div>
                    <h3 className="text-2xl font-bold text-white">{program.tytul}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{program.opis}</p>
                    <h4 className="font-bold text-gray-800 mb-3">Program obejmuje:</h4>
                    <ul className="space-y-2">
                      {program.szczegoly.map((szczegol, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{szczegol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cennik treningów indywidualnych */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cennik - Treningi Indywidualne (1 na 1)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cennikIndywidualny.map((pakiet, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border-2 border-red-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{pakiet.typ}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">{pakiet.cena}</div>
                  <p className="text-gray-600 text-sm">{pakiet.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cennik treningów grupowych */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Cennik - Treningi Grupowe (min. 10 osób)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cennikGrupowy.map((pakiet, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{pakiet.typ}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-4">{pakiet.cena}</div>
                  <p className="text-gray-600">{pakiet.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                Nasza Metodologia
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-red-500">Indywidualne Podejście</h3>
                <p className="text-gray-300">Każdy zawodnik otrzymuje spersonalizowany program rozwoju mentalnego</p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-red-500">Sprawdzone Metody</h3>
                <p className="text-gray-300">Stosujemy skuteczne techniki z akademii FC Barcelona, Ajax i Manchesteru City</p>
              </div>
              <div className="text-center p-6 bg-gray-900 rounded-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3 text-red-500">Ciągły Monitoring</h3>
                <p className="text-gray-300">Regularny pomiar postępów i dostosowywanie programu treningowego</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-red-500 via-red-600 to-red-500">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white text-3xl">
                ⚽
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Dołącz do Programu Treningów Mentalnych Odry
            </h2>
            <p className="text-xl mb-10 text-white opacity-90 max-w-3xl mx-auto">
              Rozwijaj nie tylko swoje umiejętności techniczne, ale także mentalne. 
              Zapisz się na konsultację z certyfikowanym trenerem mentalnym.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/kontakt">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer">
                  Zapisz się na konsultację
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

export default TreningiMentalne;