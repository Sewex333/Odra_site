import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo(0, 0);
  };

  const scrolUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md flex justify-between items-center px-6 h-20">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-white hover:text-red-500" onClick={scrolUp}>
        <div className="flex items-center gap-2">
          <img src="/Odra.png" alt="Logo" className="h-10" />
          | Odra
        </div>
      </Link>

      {/* Mobile button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 text-lg">
        <Link to="/o-nas" className="hover:text-red-500" onClick={scrolUp}>O nas</Link>
        <Link to="/aktualnosci" className="hover:text-red-500" onClick={scrolUp}>Ściana Chwały</Link>
        <Link to="/oferta" className="hover:text-red-500" onClick={scrolUp}>Oferta</Link>
        <Link to="/obozy-i-polkolonie" className="hover:text-red-500" onClick={scrolUp}>Obozy / Półkolonie</Link>
        <Link to="/eventy" className="hover:text-red-500" onClick={scrolUp}>Eventy / Turnieje</Link>

        {/* Dropdown */}
        <div className="relative group">
          <button className="hover:text-red-500">Treningi</button>
          <div className="absolute invisible group-hover:visible bg-black text-white shadow-lg rounded py-2 px-4 top-full left-0 z-10 min-w-40">
            <Link to="/treningi-indywidualne" className="block py-2 px-2 hover:text-red-500" onClick={scrolUp}>Indywidualne</Link>
            <Link to="/treningi-mentalne" className="block py-2 px-2 hover:text-red-500" onClick={scrolUp}>Mentalne</Link>
            <Link to="/treningi-dzieci" className="block py-2 px-2 hover:text-red-500" onClick={scrolUp}>Grupowe</Link>
          </div>
        </div>

        <Link to="/sklep" className="hover:text-red-500" onClick={scrolUp}>Sklep</Link>
        <Link to="/ebooki-materialy" className="hover:text-red-500" onClick={scrolUp}>E-booki</Link>
        <Link to="/partnerzy" className="hover:text-red-500" onClick={scrolUp}>Partnerzy</Link>
        <Link to="/kontakt" className="hover:text-red-500" onClick={scrolUp}>Kontakt i FAQ</Link>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black text-white shadow-lg py-4 px-6 flex flex-col gap-4">
          <Link to="/o-nas" className="hover:text-red-500" onClick={toggleMenu}>O nas</Link>
          <Link to="/aktualnosci" className="hover:text-red-500" onClick={toggleMenu}>Ściana Chwały</Link>
          <Link to="/oferta" className="hover:text-red-500" onClick={toggleMenu}>Oferta</Link>
          <Link to="/obozy-i-polkolonie" className="hover:text-red-500" onClick={toggleMenu}>Obozy / Półkolonie</Link>
          <Link to="/eventy" className="hover:text-red-500" onClick={toggleMenu}>Eventy / Turnieje</Link>

          <div className="flex flex-col">
            <span className="font-semibold">Treningi</span>
            <div className="ml-4 mt-2 flex flex-col gap-2">
              <Link to="/treningi-indywidualne" className="hover:text-red-500" onClick={toggleMenu}>Indywidualne</Link>
              <Link to="/treningi-mentalne" className="hover:text-red-500" onClick={toggleMenu}>Mentalne</Link>
              <Link to="/treningi-dzieci" className="hover:text-red-500" onClick={toggleMenu}>Grupowe</Link>
            </div>
          </div>

          <Link to="/sklep" className="hover:text-red-500" onClick={toggleMenu}>Sklep</Link>
          <Link to="/ebooki-materialy" className="hover:text-red-500" onClick={toggleMenu}>E-booki</Link>
          <Link to="/partnerzy" className="hover:text-red-500" onClick={toggleMenu}>Partnerzy</Link>
          <Link to="/kontakt" className="hover:text-red-500" onClick={toggleMenu}>Kontakt i FAQ</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
