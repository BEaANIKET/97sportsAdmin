import React from "react";

const tableData = [
  { username: "shubham2407", role: "USER", team1: -1200.0, team2: 1628.0 },
  { username: "mishra2402", role: "USER", team1: -2020.0, team2: 10000.0 },
  { username: "banshi2401", role: "USER", team1: -700.0, team2: 5900.0 },
  { username: "kanu2409", role: "USER", team1: -20.0, team2: 2410.0 },
  { username: "rajesh2412", role: "USER", team1: -1600.0, team2: 2034.0 },
  { username: "abhi2453", role: "USER", team1: -1732.0, team2: -2000.0 },
  { username: "ajay2501", role: "USER", team1: -5200.0, team2: 8000.0 },
  { username: "suman2511", role: "USER", team1: 650.0, team2: 3000.0 },
  { username: "raj2502", role: "USER", team1: 10.0, team2: 2000.0 },
];

const UsermarketTable = () => {
  return (
    <div className="max-w-md mx-auto mt-5 overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="border p-2">Username</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Chennai Super Kings</th>
            <th className="border p-2">Mumbai Indians</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b text-center">
              <td className="border p-2">{row.username}</td>
              <td className="border p-2">{row.role}</td>
              <td className={`border p-2 font-medium ${row.team1 < 0 ? "text-red-600" : "text-green-600"}`}>
                {row.team1.toFixed(2)}
              </td>
              <td className={`border p-2 font-medium ${row.team2 < 0 ? "text-red-600" : "text-green-600"}`}>
                {row.team2.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsermarketTable;
