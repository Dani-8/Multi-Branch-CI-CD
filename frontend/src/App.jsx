import React from 'react';

function App() {
  return (
    // Main container with full screen height, flexbox centering, and a light gray background
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      {/* Card container with white background, padding, shadow, and rounded corners */}
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        
        {/* Large, bold heading with blue text */}
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome!
        </h1>
        
        {/* Subtle gray text for the description */}
        <p className="text-gray-600 text-lg mb-8">
          You have successfully set up your React project with Tailwind CSS. Start building your modern UI now!
        </p>
        
        {/* Call-to-action button with hover effects and smooth transition */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
        
      </div>
    </div>
  );
}


export default App;
