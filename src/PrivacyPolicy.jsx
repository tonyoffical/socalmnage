import React from 'react';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: May 21, 2025</p>

        <div className="prose prose-sm sm:prose max-w-none">
          <p className="text-gray-700 mb-6">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Interpretation and Definitions</h2>
          
          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Interpretation</h3>
          <p className="text-gray-700 mb-4">
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Definitions</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li className="text-gray-700"><strong>Account</strong> means a unique account created for You to access our Service.</li>
            <li className="text-gray-700"><strong>Company</strong> refers to this application.</li>
            <li className="text-gray-700"><strong>Cookies</strong> are small files placed on Your device.</li>
            <li className="text-gray-700"><strong>Personal Data</strong> is any information relating to an identifiable individual.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Collecting and Using Your Personal Data</h2>
          
          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Types of Data Collected</h3>
          <h4 className="font-medium text-gray-800 mt-3 mb-2">Personal Data</h4>
          <p className="text-gray-700 mb-4">
            While using Our Service, We may ask You to provide personally identifiable information that can be used to contact or identify You.
          </p>

          <h4 className="font-medium text-gray-800 mt-3 mb-2">Usage Data</h4>
          <p className="text-gray-700 mb-4">
            Usage Data is collected automatically when using the Service and may include information such as Your Device's IP address, browser type, and pages visited.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Use of Your Personal Data</h3>
          <p className="text-gray-700 mb-4">
            The Company may use Personal Data to provide and maintain our Service, manage Your Account, contact You, and for business transfers.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Security of Your Personal Data</h2>
          <p className="text-gray-700 mb-6">
            The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, You can contact us at: <a href="mailto:newdevice1848@gmail.com" className="text-blue-600 hover:underline">newdevice1848@gmail.com</a>
          </p>
        </div>
      </div>
      <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Close
          </button>
    </div>
  );
};

export default PrivacyPolicy;