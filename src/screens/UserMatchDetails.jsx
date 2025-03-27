import { useEffect } from "react";
import { Calendar } from "../components/Modal/UserMatchDetails/Calender";
import MatchTable from "../components/Modal/UserMatchDetails/MatchTable";
import { NavigationTable } from "../components/Modal/UserMatchDetails/NavigationLink";
import axios from "axios";
import {
  USER_BETS_DETAILS_COL,
  USER_MATCH_DETAILS_COL,
  USER_MATCH_DETAILS_GAME_COL,
  USER_MATCH_DETAILS_GAMENAME_COL,
} from "../utils/columns";
import DataTable from "../components/table/DataTable";
import { useSearchParams } from "react-router";

const UserMatchDetails = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.toString());

  // Get values from query parameters
  const m = searchParams.get("m");
  const e = searchParams.get("e");
  const ma = searchParams.get("ma");

  console.log(m, e, ma);

  useEffect(() => {
    const fetchData = async () => {
      await axios.post("https://admin.titan97.live/Apicall/calculate_bets", {});
    };
    fetchData();
  }, []);

  const Data = [
    { sportname: "Cricket", profitloss: 5000, commision: 300, totalpsl: 4700 },
    {
      sportname: "Football",
      profitloss: -2000,
      commision: 150,
      totalpsl: -2150,
    },
    { sportname: "Tennis", profitloss: 3500, commision: 200, totalpsl: 3300 },
    { sportname: "Basketball", profitloss: 1000, commision: 50, totalpsl: 950 },
    { sportname: "Hockey", profitloss: -500, commision: 30, totalpsl: -530 },
  ];

  const gameData = [
    {
      sportname: "cricket",
      eventname: "India vs England",
      profitloss: 1000,
      commision: 0,
      totalpsl: 5000,
    },
    {
      sportname: "cricket",
      eventname: "Australia vs Pakistan",
      profitloss: -500,
      commision: 50,
      totalpsl: 3000,
    },
    {
      sportname: "cricket",
      eventname: "South Africa vs New Zealand",
      profitloss: 2000,
      commision: 100,
      totalpsl: 7000,
    },
    {
      sportname: "cricket",
      eventname: "West Indies vs Sri Lanka",
      profitloss: -1200,
      commision: 80,
      totalpsl: 4500,
    },
    {
      sportname: "cricket",
      eventname: "Bangladesh vs Afghanistan",
      profitloss: 750,
      commision: 30,
      totalpsl: 2500,
    },
  ];

  const gameDetailsData = [
    {
      sportname: "cricket",
      eventname: "India vs England",
      marketname: "PAK 6 Over run",
      result: 79,
      profitloss: 1000,
      commision: 0,
      settletime: "Mar 23, 2025, 12:16:35 PM",
    },
    {
      sportname: "cricket",
      eventname: "India vs England",
      marketname: "Total Match Runs",
      result: 320,
      profitloss: -500,
      commision: 50,
      settletime: "Mar 23, 2025, 3:45:20 PM",
    },
    {
      sportname: "cricket",
      eventname: "India vs England",
      marketname: "First Wicket Method",
      result: 80,
      profitloss: 200,
      commision: 10,
      settletime: "Mar 23, 2025, 1:10:50 PM",
    },
    {
      sportname: "cricket",
      eventname: "India vs England",
      marketname: "Highest Individual Score",
      result: 105,
      profitloss: 1500,
      commision: 75,
      settletime: "Mar 23, 2025, 4:30:15 PM",
    },
    {
      sportname: "cricket",
      eventname: "India vs England",
      marketname: "Total Sixes",
      result: 12,
      profitloss: -700,
      commision: 40,
      settletime: "Mar 23, 2025, 5:00:00 PM",
    },
  ];
  const betsData = [
    {
      bettype: "Back",
      userprice: 2.5,
      amount: 5000,
      pl: "+1200",
      placedate: "2025-03-20",
      matchdate: "2025-03-22",
      details: "India vs England - India to win",
    },
    {
      bettype: "Lay",
      userprice: 1.8,
      amount: 2000,
      pl: "-800",
      placedate: "2025-03-19",
      matchdate: "2025-03-21",
      details: "Australia vs South Africa - Australia to win",
    },
    {
      bettype: "Back",
      userprice: 3.2,
      amount: 10000,
      pl: "+3000",
      placedate: "2025-03-21",
      matchdate: "2025-03-23",
      details: "Pakistan vs New Zealand - Pakistan to win",
    },
    {
      bettype: "Lay",
      userprice: 2.1,
      amount: 3500,
      pl: "-1500",
      placedate: "2025-03-18",
      matchdate: "2025-03-20",
      details: "England vs Sri Lanka - England to win",
    },
    {
      bettype: "Back",
      userprice: 2.9,
      amount: 1500,
      pl: "+600",
      placedate: "2025-03-17",
      matchdate: "2025-03-19",
      details: "West Indies vs Bangladesh - West Indies to win",
    },
  ];

  return (
    <div className="container m-auto sm:w-full flex flex-col">
      {m && e && ma ? (
        <div className=" flex w-full flex-col ">
          <div className=" w-full flex justify-end mt-6 mb-1 ">
            <div className=" w-fit flex gap-1 ">
              <div className=" p-2 border border-black text-xs text-center bg-blue-400 font-semibold">
                {" "}
                <p>Back</p>
              </div>
              <div className=" p-2 text-xs text-center border border-black bg-red-300 font-semibold">
                {" "}
                <p>Lay</p>
              </div>
              <div className=" p-2 text-center text-xs border border-black bg-gray-200 font-semibold">
                {" "}
                <p>Void</p>
              </div>
            </div>
          </div>
          <div className=" w-full p-2 bg-blue-700 text-white font-bold text-sm ">
            <p> Bets History</p>
          </div>
          <DataTable
            columns={USER_BETS_DETAILS_COL}
            data={betsData}
            entriesPerPage={10}
          />
        </div>
      ) : (
        <>
          <NavigationTable />
          <Calendar />
          {!m && !e && !ma && (
            <DataTable
              columns={USER_MATCH_DETAILS_COL}
              data={Data}
              entriesPerPage={10}
            />
          )}
          {m && !e && !ma && (
            <DataTable
              columns={USER_MATCH_DETAILS_GAME_COL}
              data={gameData}
              entriesPerPage={10}
            />
          )}
          {m && e && !ma && (
            <DataTable
              columns={USER_MATCH_DETAILS_GAMENAME_COL}
              data={gameDetailsData}
              entriesPerPage={10}
            />
          )}{" "}
        </>
      )}
    </div>
  );
};

export default UserMatchDetails;
