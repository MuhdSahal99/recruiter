import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center">
        <img
          src="/assests/images/logo.png" // Replace with your actual logo path
          alt="Wisualyst Logo"
          className="h-8 w-auto"
        />
      </div>
      <div className="flex-grow text-center">
        <h1 className="text-lg font-semibold text-gray-800"></h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">3</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&amp;apiKey=e8521392b64d4ca28efa899b1eeac3c3" // Replace with actual user avatar path
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium">Mohamed Khalifa</p>
            <p className="text-xs text-gray-500">Recruiter</p>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;

