import React, { useState } from 'react';

export default function Inscription() {
  // Gérer l'état du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [token, setToken] = useState(null); // Stocker le token JWT

  // Gérer les changements dans les champs de formulaire
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Valider les champs du formulaire
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation du formulaire
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return; // Stopper si des erreurs sont présentes
    }

    // Requête API d'inscription
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Inscription réussie!');
        setToken(data.token); // Sauvegarder le token JWT
      } else {
        const errorData = await response.json();
        setErrors({ apiError: errorData.message || 'Inscription échouée' });
      }
    } catch (error) {
      setErrors({ apiError: 'Une erreur s\'est produite lors de l\'inscription' });
    }
  };

  return (
    <form className="w-full max-w-lg container mt-10" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="Jane"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
      </div>
      {errors.apiError && <p className="text-red-500 text-xs italic">{errors.apiError}</p>}
      {successMessage && <p className="text-green-500 text-xs italic">{successMessage}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Inscription
      </button>
    </form>
  );
}
