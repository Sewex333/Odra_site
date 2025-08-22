import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./pages/Navbar";
import Form from "./pages/Form";
import Footer from "./pages/Footer";
import videoMain from "../public/filmik_glowna.mp4";
import { useEffect, useRef } from "react";
import "./App.css";
import Map from "./Map";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.4;
    }
  }, []);

  const offerings = [
    { icon: "shoot.png", text: "Sportowa rywalizacja" },
    { icon: "strategy.png", text: "Rozwój z najlepszymi trenerami" },
    { icon: "football-pitch.png", text: "Turnieje i wydarzenia" },
    { icon: "red.png", text: "Dyscyplina i etyka sportowa" },
    { icon: "brain.png", text: "Trening mentalny" },
    { icon: "sport.png", text: "Obozy i półkolonie" },
  ];

  const socialMedia = [
    { icon: "facebook.png", url: "https://www.facebook.com/1945odra" },
    { icon: "instagram.png", url: "https://www.instagram.com/ultras.odraszczecin" },
  ];

  const locations = [
    {
      name: "MOSiR Szczecin",
      address: "ul. Władysława Szafera 7, 71-245 Szczecin",
      coordinates: [53.4642, 14.4914],
    },
    {
      name: "Boisko Witkiewicza 72",
      address: "Stanisława Ignacego Witkiewicza 72, 70-001 Szczecin",
      coordinates: [53.4256, 14.53],
    },
    {
      name: "Boisko Kresowa 42",
      address: "Kresowa 42, 71-899 Szczecin",
      coordinates: [53.38, 14.62],
    },
    {
      name: "Boisko Bandurskiego 35",
      address: "ks. Bp. Władysława Bandurskiego 35, 71-685 Szczecin",
      coordinates: [53.45, 14.5],
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={videoMain}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Zagraj w najlepszym klubie nad {" "}
            <span className="text-red-500">Odrą</span>
          </motion.h1>
          <motion.p
            className="text-gray-200 mt-4 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Dołącz do jednego z czołowych klubów w regionie i rozwijaj swoje
            umiejętności pod okiem najlepszych trenerów.
          </motion.p>
          <motion.div
            className="flex gap-4 mt-6 flex-wrap justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <a
              href="#form"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Zapisz się teraz
            </a>
            <Link
              to="/oferta"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
              Oferta
            </Link>
          </motion.div>
        </div>
      </section>

      {/* OFERTA + FACEBOOK */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              W Odrze oferujemy:
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {offerings.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <img
                    src={`/icons/${item.icon}`}
                    alt={item.text}
                    className="w-10 h-10 mr-4"
                  />
                  <p className="font-medium text-gray-800">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                Znajdź nas w social mediach:
              </h3>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition"
                  >
                    <img
                      src={`/icons/${social.icon}`}
                      alt={social.icon}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F1945odra%2F&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="100%"
              height="700"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Feed"
            ></iframe>
          </div>
        </div>
      </section>

      {/* LOKALIZACJE */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Map locations={locations} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Nasze Lokalizacje
            </h2>
            <div className="space-y-4">
              {locations.map((loc, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <h3 className="font-semibold text-lg">{loc.name}</h3>
                  <p className="text-sm text-gray-600">{loc.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loc.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-red-600 hover:underline"
                  >
                    Zobacz na mapie
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARZ */}
      <div id="form" className="bg-white py-16">
        <Form />
      </div>

      <Footer />
    </>
  );
}

export default App;
