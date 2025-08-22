  import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const faqData = {
  "faq": [
    {
      "id": 1,
      "pytanie": "Od jakiego wieku można zapisać dziecko do szkółki? / Czy można dołączyć w trakcie sezonu? Czy są nabory tylko raz w roku?",
      "odpowiedz": "Przyjmujemy dzieci od 4 roku życia. Mamy grupy dostosowane do wieku, aby zapewnić optymalny rozwój.\n\nTak, można dołączyć w trakcie trwania sezonu.\n\nDLA NAJMŁODSZYCH ZAWODNIKÓW:\n• Okres nie ma większego znaczenia\n• Na starcie sezonu, gdy przychodzi dużo nowych osób, łatwiej się zaaklimatyzować nowym osobom\n\nNAJLEPSZE OKRESY NA NABÓR:\n• Sierpień lub początek września\n• Marzec / kwiecień\n\nDLACZEGO TE TERMINY:\n• Okienko transferowe jest jeszcze otwarte\n• Runda jesienna i wiosenna dopiero się zaczyna"
    },
    {
      "id": 2,
      "pytanie": "Jak wyglądają pierwsze zajęcia – czy są darmowe? Czy można przyjść na próbę?",
      "odpowiedz": "Tak, oferujemy jeden bezpłatny trening próbny dla każdego nowego zawodnika, aby mógł sprawdzić, czy czuje się u nas dobrze.\n\nW Future jesteśmy na tyle pewni naszej jakości, że wyznajemy zasadę:\n\n• Do 3 x razy sztuka\n• 3 razy przyjdź za darmo na treningi testowe\n• Przekonaj się sam, że warto dołączyć na stałe"
    },
    {
      "id": 3,
      "pytanie": "Jak często odbywają się treningi i w jakich godzinach?",
      "odpowiedz": "Treningi w zależności od kategorii wiekowej i lokalizacji odbywają się od 16:00 lub później.\n\nFuture ma innowacyjne podejście do swoich klubowiczów. W odróżnieniu od innych klubów i szkółek trenować z nami można:\n\n• Od 1 x w tygodniu do 5 x tygodniu w zależności od preferencji\n• Zawodnik, rodzic w porozumieniu z trenerem głównym lub koordynatorem klubu ustala wspólnie dni, terminy i grupę dopasowaną do wieku oraz umiejętności zawodnika\n\nWarto jednak pamiętać, że im więcej treningów tym bardziej optymalny rozwój."
    },
    {
      "id": 4,
      "pytanie": "Gdzie odbywają się treningi? Czy są prowadzone przez cały rok (zimą i latem)?",
      "odpowiedz": "Trenujemy głównie w 3 dzielnicach: Niebuszewo, Centrum i Gumieńce.\n\nW OKRESIE CIEPLEJSZYM trenujemy głównie na:\n• Boiskach naturalnych\n• Boiskach sztucznych\n• Boiskach typu ORLIK\n• Obiektach MOSRIR Szczecin\n\nW OKRESIE ZIMOWYM:\n• Najmłodsze grupy do 7. roku życia od listopada do marca trenują na obiektach zadaszonych\n• Starsze grupy trenują niemalże we wszystkich klubach cały rok na boiskach otwartych z uwagi na wymagania związane z piłką nożną"
    },
    {
      "id": 5,
      "pytanie": "Ile kosztuje miesięczna składka / opłata za treningi?",
      "odpowiedz": "Składka miesięczna uiszczana jest co miesiąc w wysokości:\n\n• Od 160 zł do 240 zł w zależności od częstotliwości zajęć"
    },
    {
      "id": 6,
      "pytanie": "Czy dzieci biorą udział w meczach, turniejach lub ligach?",
      "odpowiedz": "Tak! Dzieci u nas w klubie przeważnie co tydzień grają regularnie w różnego rodzaju rozgrywkach:\n\n• Turnieje Pierwsza Piłka ZZPN\n• Mecze ligowe w ramach ligi ZZPN\n• Sparingi\n• Turnieje\n• Eventy\n\nDODATKOWO w okresie ferii zimowych i letnich organizujemy dla wszystkich naszych klubowiczów aktywny wypoczynek w postaci:\n• Wyjazdowych obozów sportowych\n• Półkolonii stacjonarnych"
    },
    {
      "id": 7,
      "pytanie": "Kto prowadzi zajęcia? Jakie kwalifikacje mają trenerzy?",
      "odpowiedz": "Zajęcia prowadzą wyselekcjonowane osoby z kompetencjami, podejściem do dzieci i ogromną pasją do swojej pracy.\n\nW KLUBIE ZNAJDZIEMY:\n• Trenerów profesjonalnych z wysokim doświadczeniem\n• Licencje trenerskie UEFA A, UEFA B, UEFA C\n• Instruktorów stale się dokształcających na szkoleniach, kursach, warsztatach i konferencjach\n\nDOŚWIADCZENIE MIĘDZYNARODOWE:\nNasi trenerzy brali udział w licznych stażach w profesjonalnych akademiach piłkarskich:\n• VFL Wolfsburg i Hannover 96 (Niemcy)\n• Slavia Praga (Czechy)\n• Legia Warszawa, Stal Rzeszów (Polska)\n\nDODATKOWO w klubie pracują:\n• Trenerzy mentalni\n• Trenerzy motoryczni\n• Dietetyk"
    },
    {
      "id": 8,
      "pytanie": "Czy trzeba mieć własny sprzęt? Jakie obuwie / strój jest wymagany?",
      "odpowiedz": "Future współpracuje z firmą R-GOL - największym dystrybutorem sprzętu sportowego w Polsce.\n\nPOMOC W ZAKUPACH:\nPomagamy rodzicom zamówić wszystkie potrzebne:\n• Stroje klubowe treningowe\n• Buty\n• Inne gadżety w razie potrzeby\n\nREKOMENDACJE OBUWIA:\n• Buty mikrokorki (tzw. turfy) - najbardziej uniwersalne, nadają się niemalże na każdą nawierzchnie\n• Na trawę naturalną - korki\n• Na orlik - turfy\n• Na halę - buty halówki\n\nNA ZAJĘCIA PRÓBNE:\nBierzemy komfortowy strój sportowy dopasowany do pogody (najlepiej czarny lub biały - barwy klubowe)"
    },
    {
      "id": 9,
      "pytanie": "Czy szkółka współpracuje z większymi klubami? Czy możliwy jest rozwój zawodniczy?",
      "odpowiedz": "Tak! Szkółka współpracuje z klubami z Ekstraklasy oraz z drużynami Centralnej Ligi Juniorów.\n\nPROJEKT FUTURE ELITE:\nW przypadku wybitnych jednostek z wysokim potencjałem objęci są oni projektem FUTURE ELITE:\n• Projekt indywidualnego kształcenia\n• Rozwija potencjał zawodników pracując nad ich mocnymi stronami\n• Niweluje deficyty podczas sesji treningu indywidualnego\n• Sesje dla osób w projekcie są DARMOWE dla uczestników\n• Cały projekt finansuje nasz klub jako inwestycja w najlepszych zawodników\n\nDODATKOWE MOŻLIWOŚCI:\n• Wyróżniający się zawodnik poza projektem FUTURE ELITE dostają szansę treningów i gry w starszej kategorii wiekowej\n• Jeśli pokażą się z pozytywnej strony i będą postacią wiodącą - przechodzimy krok dalej\n• Szukamy wyższego poziomu rozgrywkowego w sprzyjającym środowisku i wymagającym np. w klubach Ekstraklasy lub w drużynach grających w Centralnej Lidze Juniorów"
    },
    {
      "id": 10,
      "pytanie": "Czy można dołączyć w trakcie sezonu? Czy są nabory tylko raz w roku?",
      "odpowiedz": "Tak, można dołączyć w trakcie trwania sezonu.\n\nDLA NAJMŁODSZYCH ZAWODNIKÓW:\n• Okres nie ma większego znaczenia\n• Na starcie sezonu, gdy przychodzi dużo nowych osób, łatwiej się zaaklimatyzować nowym osobom\n\nNAJLEPSZE OKRESY NA NABÓR:\n• Sierpień lub początek września\n• Marzec / kwiecień\n\nDLACZEGO TE TERMINY:\n• Okienko transferowe jest jeszcze otwarte\n• Runda jesienna i wiosenna dopiero się zaczyna"
    }
  ]
};

const Kontakt = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const formatText = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      if (line.startsWith('• ')) {
        return (
          <div key={index} className="flex items-start mb-1">
            <span className="text-yellow-500 mr-2 mt-1">•</span>
            <span className="flex-1 text-gray-800">{line.substring(2)}</span>
          </div>
        );
      }
      return (
        <div key={index} className="mb-1 text-gray-800">
          {line}
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
          {/* Header kontaktowy */}
        <div className="w-full py-16 px-4 mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border-4 border-red-400">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Zacznij swoją piłkarską przygodę już dziś!
                </h1>
                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
              </div>

              <div className="p-8 bg-white">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center justify-center">
                    <span className="text-yellow-500 mr-2">📞</span>
                    Kontakt
                  </h2>
                  <div className="bg-red-50 rounded-xl p-6 border-2 border-red-300">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Biuro ODRA</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-gray-800">
                        <span className="text-red-500 mr-2">📞</span>
                        <span className="font-semibold">505 205 550</span>
                      </div>
                      <div className="flex items-center justify-center text-gray-800">
                        <span className="text-red-500 mr-2">📧</span>
                        <span className="font-semibold">ffc.biuro@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border-4 border-red-400">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Najczęściej zadawane pytania
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {faqData.faq.map((item) => (
                    <div key={item.id} className="border-2 border-red-300 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="w-full p-4 text-left bg-red-50 hover:bg-red-100 transition-all duration-300 flex justify-between items-center"
                      >
                        <span className="font-semibold text-red-600">{item.pytanie}</span>
                        <span className={`text-yellow-500 transition-transform duration-300 ${activeAccordion === item.id ? 'rotate-180' : ''}`}>
                          ⬇️
                        </span>
                      </button>
                      {activeAccordion === item.id && (
                        <div className="p-6 bg-white border-t-2 border-red-300">
                          <div className="leading-relaxed">
                            {formatText(item.odpowiedz)}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontakt;
