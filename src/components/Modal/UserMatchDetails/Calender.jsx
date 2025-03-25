import React, { useState } from "react";

export const Calendar = () => {
  const [selectedFromDate, setSelectedFromDate] = useState("22/03/2025");
  const [selectedToDate, setSelectedToDate] = useState("22/03/2025");

  return (
    <div className="p-4 flex w-full flex-col gap-2 bg-gray-50 border rounded">
      <div className="flex flex-col gap-1">
        <p className="text-md font-bold text-gray-500">Data Source</p>
        <select
          name=""
          className=" bg-white p-2 text-xs font-bold text-black/60"
          id=""
        >
          <option value="">LIVE DATA</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-gray-500">From</p>
        <div className="flex items-center justify-between border rounded p-2">
          <span className="text-sm">{selectedFromDate}</span>
          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-gray-500">To</p>
        <div className="flex items-center justify-between border rounded p-2">
          <span className="text-sm">{selectedToDate}</span>
          <button className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-2">
        <button className="bg-gray-800 font-bold text-white px-4 py-2 rounded text-sm">
          Get P&L
        </button>
      </div>
    </div>
  );
};
