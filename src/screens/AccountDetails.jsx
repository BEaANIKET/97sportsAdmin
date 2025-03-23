import React from "react";

const AccountDetails = ({ profileData }) => {
  const formatLabel = (label) => {
    return label
      .replace(/([A-Z])/g, " $1") 
      .replace(/_/g, " ") 
      .replace(/^./, (str) => str.toUpperCase());
  };
 profileData = {
      name: 'demo8956',
      commission: '0',
      rollingCommission: 'View',
      agentRollingCommission: 'View',
      currency: 'IRP',
      partnership: '100',
      mobileNumber: 'Not found',
      password: '**********'
    };
  

  return (
    <div className="bg-white w-full">
      <div className="bg-gray-800 text-white p-4 font-bold">Account Details</div>
      <div className="divide-y">
        {Object.entries(profileData).map(([key, value], index) => (
          <div key={index} className="flex flex-col sm:flex-row p-4 border-b">
            <div className="font-semibold w-full sm:w-1/4 mb-2 sm:mb-0">{formatLabel(key)}</div>
            <div className="w-full sm:w-3/4 flex items-center">
              {value === "View" ? (
                <div className="flex items-center space-x-2">
                  <span>{value}</span>
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                </div>
              ) : key === "password" ? (
                <div className="flex items-center space-x-2">
                  <span>{value}</span>
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    ></path>
                  </svg>
                </div>
              ) : (
                <span>{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountDetails;