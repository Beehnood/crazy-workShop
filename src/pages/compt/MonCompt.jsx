import React from "react";
import { Link } from "react-router-dom";

export default function MonCompt() {
  return (
    <form className="w-full max-w-sm container mt-10">
      <div className="flex items-center border-b border-blue-400 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
        />
        <button
          className="flex-shrink-0 bg-blue-200 hover:bg-blue-400 border-blue-400 hover: border-blue-400 text-sm border-4 text-black py-1 px-2 rounded"
          type="button"
        >
          <Link to="/PagePersonnelle">Sign up</Link>
        </button>
        <button
          className="flex-shrink-0 border-transparent border-4 text-blue-400 hover:text-blue-800 text-sm py-1 px-2 rounded"
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
