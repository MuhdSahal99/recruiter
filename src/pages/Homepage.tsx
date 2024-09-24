import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCandidateClick = () => {
    navigate('/candidate');
  };

  const handleEmployerClick = () => {
    navigate('/employer');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Job Matcher</h1>
      <div className="space-x-4">
        <button
          onClick={handleCandidateClick}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          I'm a Candidate
        </button>
        <button
          onClick={handleEmployerClick}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          I'm an Employer
        </button>
      </div>
    </div>
  );
};

export default HomePage;