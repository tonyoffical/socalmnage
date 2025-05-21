import React, { useState } from "react";
import axios from "axios";
import PrivacyPolicyModal from "./PrivacyPolicy";

function App() {
  const [text, setText] = useState("");
  const [platforms, setPlatforms] = useState({
    facebook: false,
    instagram: false,
    youtube: false,
  });
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const handlePost = async () => {
    await axios.post("https://socail-backend-1.onrender.com/post", {
      text,
      platforms,
    });
    alert("Posted (mock)!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Multi-Post Tool
        </h1>
        
        <textarea
          rows={4}
          placeholder="Write your post..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />
        
        <div className="flex justify-between mb-6">
          {["facebook", "instagram", "youtube"].map((platform) => (
            <label key={platform} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={platforms[platform]}
                onChange={() =>
                  setPlatforms({ ...platforms, [platform]: !platforms[platform] })
                }
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 capitalize">
                {platform}
              </span>
            </label>
          ))}
        </div>
        
        <button
          onClick={handlePost}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out mb-4"
        >
          Post
        </button>

        <div className="text-center text-sm text-gray-500">
          <button 
            onClick={() => setShowPrivacyPolicy(true)}
            className="text-blue-500 hover:underline"
          >
            View Privacy Policy
          </button>
        </div>
      </div>

      {showPrivacyPolicy && (
        <PrivacyPolicyModal onClose={() => setShowPrivacyPolicy(false)} />
      )}
    </div>
  );
}

export default App;