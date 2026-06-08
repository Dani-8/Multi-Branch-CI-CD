import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          Welcome!
        </h1>
        
        <p className="text-gray-600 text-lg mb-8">
          You have successfully set up your React project with Tailwind CSS. Start building your modern UI now!
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
        
      </div>
    </div>
  );
}


export default App;
