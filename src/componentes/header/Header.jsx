import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

export default function Navbar() {
  return (
    <nav className="bg-waikawa-gray-200 py-6 px-8 shadow-md">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <ul className="flex justify-end items-center gap-6 font-poppins text-lg">
          <li className="hover:text-red-500">
            <Link to="/">Accueil</Link>
          </li>
          <li  className="hover:text-red-500">
            <Link to="/Connexion">Connexion</Link>
          </li>
          <li  className="hover:text-red-500">
            <Link to="/Inscription">Inscription</Link>
          </li>
        </ul>
        <button className="bg-blue-600 px-2 py-2 rounded-md shadow-lg text-white hover:bg-red-950">
          <Link to="/MonCompte">Mon Compte</Link>
        </button>
      </div>
    </nav>
  );
}
