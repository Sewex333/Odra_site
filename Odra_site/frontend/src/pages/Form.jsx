import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "../Form.css";
import { Link } from 'react-router';

const Form = () => {
  const [name, setName] = useState('');
  const [b_date, SetB_date] = useState('');
  const [nr_tel, setNr_tel] = useState('');
  const [mail, setMail] = useState('');
  const [info, setInfo] = useState('');

  const form = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_wy21u3d", "template_wabyhgk", form.current, 'XKBdsBjZTnh66Riss')
      .then(() => {
        localStorage.setItem('formSubmitted', 'true');
        window.location.href = "/ebooki-materialy";
      })
      .catch(() => {
        alert('Coś poszło nie tak, spróbuj ponownie!');
      });

    fetch('/api/data', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imie: name,
        dataUrodzenia: b_date,
        Numer_Telefonu: nr_tel,
        e_mail: mail,
        Informacje_Dodatkowe: info
      })
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-200">
<div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl border border-red-300 animate-fade-in mt-16 mb-20">
        
        {/* Nagłówek */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Formularz zgłoszeniowy
          </h1>
          <p className="text-gray-600 text-xs mt-1">Dołącz do Odry Szczecin</p>
        </div>

        <form ref={form} onSubmit={handleForm} className="space-y-5">
          
          {/* Imię i nazwisko */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jan Kowalski"
              className="w-full p-2.5 border-2 border-red-300 rounded-lg bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-800 text-sm transition-all duration-300"
              required
            />
          </div>

          {/* Data urodzenia */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Data urodzenia
            </label>
            <input
              type="date"
              name="data"
              value={b_date}
              onChange={(e) => SetB_date(e.target.value)}
              className="w-full p-2.5 border-2 border-red-300 rounded-lg bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-800 text-sm transition-all duration-300"
              required
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Numer telefonu
            </label>
            <input
              type="tel"
              name="numer"
              value={nr_tel}
              onChange={(e) => setNr_tel(e.target.value)}
              pattern="[0-9]{9}"
              placeholder="000-000-000"
              className="w-full p-2.5 border-2 border-red-300 rounded-lg bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-800 text-sm transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Adres email
            </label>
            <input
              type="email"
              name="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="twoj@email.com"
              className="w-full p-2.5 border-2 border-red-300 rounded-lg bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-800 text-sm transition-all duration-300"
              required
            />
          </div>

          {/* Informacje dodatkowe */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Informacje o sobie
            </label>
            <textarea
              name="message"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              placeholder="Tutaj wpisz kilka słów o sobie..."
              className="w-full p-2.5 border-2 border-red-300 rounded-lg bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-gray-800 text-sm transition-all duration-300 min-h-[90px] resize-vertical"
            />
          </div>

          {/* Przyciski */}
          <div className="space-y-3">
            <input
              type="submit"
              value="Wyślij zgłoszenie"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer text-sm"
            />

            <Link
              to="/"
              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Powrót
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
