import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router';

const Eventy = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) throw new Error('Problem z pobraniem danych');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Błąd:', error);
        setError('Nie udało się załadować eventów');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const EventCard = ({ event }) => (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${!event.dostepny ? 'opacity-75' : ''}`}>
      <div className="h-32 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center relative">
        <div className="text-6xl">{event.ikona}</div>
        {!event.dostepny && (
          <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            WYPRZEDANE
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">{event.nazwa}</h3>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-2">
            {event.kategoria}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.opis}</p>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">📅 Data:</span>
            <span className="font-semibold">{event.data}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">📍 Miejsce:</span>
            <span className="font-semibold">{event.miejsce}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">👥 Uczestnicy:</span>
            <span className="font-semibold">{event.uczestnicy}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">🎁 Nagrody:</span>
            <span className="font-semibold">{event.nagrody}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          {event.dostepny ? (
            <Link 
              to="/kontakt" 
              className="w-full block px-6 py-3 bg-red-600 text-white rounded-lg font-semibold text-sm text-center transition-all duration-200 hover:bg-red-700 hover:shadow-md transform hover:-translate-y-0.5"
            >
              Zapisz się
            </Link>
          ) : (
            <div className="w-full px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold text-sm text-center cursor-not-allowed">
              Wyprzedane
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mb-4"></div>
            <p>Ładowanie eventów...</p>
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
          <div className="text-center text-red-500">
            <p className="text-xl">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
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
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">
                Eventy Sportowe
              </span> 
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Dołącz do naszych wyjątkowych wydarzeń sportowych. Turnieje, obozy, kliniki treningowe 
              i mecze charytatywne - znajdź coś dla siebie!
            </p>
          </div>
        </div>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">Min. 10</div>
                <div className="text-gray-600">Eventów rocznie</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800 mb-2">2000+</div>
                <div className="text-gray-600">Uczestników</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">1945</div>
                <div className="text-gray-600">Tradycja od</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-gray-600">Profesjonalizm</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-red-500 to-red-600">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">
              Rodzaje wydarzeń
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-white mb-2">Turnieje / Eventy</h3>
                <p className="text-white opacity-90 text-sm">Rywalizacja na najwyższym poziomie</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏕️</div>
                <h3 className="font-bold text-white mb-2">Obozy i Półkolonie</h3>
                <p className="text-white opacity-90 text-sm">Intensywne treningi i rozwój</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-bold text-white mb-2">Treningi / Mecze</h3>
                <p className="text-white opacity-90 text-sm">Nauka od najlepszych</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🧑‍🎓</div>
                <h3 className="font-bold text-white mb-2">Treningi Indywidualne / Mentalne</h3>
                <p className="text-white opacity-90 text-sm">Rozwój mentalny i techniczny</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Nadchodzące wydarzenia
            </h2>
            {events.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Brak nadchodzących wydarzeń. Sprawdź później!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-black relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <div className="text-4xl">🏆</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Rozpocznij swoją piłkarską przygodę już dziś!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dołącz do Odry i rozwijaj swoje umiejętności pod okiem doświadczonych trenerów
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <button className="bg-white border-2 border-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                  Zapisz się
                </button>
              </Link>
              <Link to="/kontakt">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors cursor-pointer">
                  Kontakt
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

export default Eventy;