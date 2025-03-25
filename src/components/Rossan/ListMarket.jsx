import { Link } from "react-router";

export default function ListMarket() {
    return (
      <div className="w-full max-w-md mx-auto p-2 rounded-md bg-gray-100 mt-2">
        <div className="bg-gray-800 text-white px-4 py-2 font-semibold">Cricket</div>
        <div className="flex justify-between  items-center p-4 border">
          <Link to="/MarketDetail" className="text-blue-600 hover:underline font-medium">
            Chennai Super Kings v Mumbai Indians
          </Link>
          <span className="text-gray-700 font-semibold">Total Bets 26</span>
        </div>
      </div>
    );
  }