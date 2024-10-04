import React from "react";

export default function PagePersonnelle() {
  return (
    <div className="container">
      <h1>Page Personnelle</h1>
      <div>
          <ul className=" container mt-6 border-b-2">
            <li className="p-6 border-b-2">adrress</li>
            <li className="p-6 border-b-2">adrress</li>
            <li className="p-6 border-b-2">adrress</li>
            <li className="p-6 border-b-2">adrress</li>
          </ul>
        </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        {/* <button className="bg-yellow-400 text-white px-2 py-2 rounded-md">Modifier</button> */}
        <button className="bg-red-700 text-white px-2 py-2 rounded-md">Supprimer</button>
        <button className="bg-green-700 text-white px-2 py-2 rounded-md">Partager</button>
      </div>
    </div>
  );
}
