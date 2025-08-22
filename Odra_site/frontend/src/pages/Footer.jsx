import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const [name, setName] = useState("");
  const [wiadomosc, setWiadomosc] = useState("");

  return (
    <footer className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-white py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo i dane kontaktowe */}
        <div className="flex flex-col gap-5">
          <img src="/Odra.png" alt="logotyp" className="w-40" />
          <div className="space-y-3 text-sm leading-relaxed">
            <p className="font-extrabold text-lg tracking-wide">Odra Szczecin</p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-200" />
              ul. Maciejowicka 3/1, 71-784 Szczecin
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-red-200" /> +48 505 205 550
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-200" /> ffc.biuro@gmail.com
            </p>
          </div>
        </div>

        {/* Formularz kontaktowy */}
        <form className="w-full max-w-md space-y-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-3 border-b border-red-400 pb-2">
            Skontaktuj się z nami
          </h3>
          <div>
            <label className="block text-sm mb-1">Imię i nazwisko:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Wiadomość:</label>
            <textarea
              name="wiadomosc"
              value={wiadomosc}
              onChange={(e) => setWiadomosc(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 text-gray-900 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            Wyślij
          </button>
        </form>
      </div>

    </footer>
  );
};

export default Footer;
