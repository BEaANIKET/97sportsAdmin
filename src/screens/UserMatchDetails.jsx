import { useEffect } from "react";
import { Calendar } from "../components/Modal/UserMatchDetails/Calender";
import MatchTable from "../components/Modal/UserMatchDetails/MatchTable";
import { NavigationTable } from "../components/Modal/UserMatchDetails/NavigationLink";
import axios from "axios";
import {
  USER_MATCH_DETAILS_COL,
  USER_MATCH_DETAILS_GAME_COL,
  USER_MATCH_DETAILS_GAMENAME_COL,
} from "../utils/columns";
import DataTable from "../components/table/DataTable";

const UserMatchDetails = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://admin.titan97.live/Apicall/calculate_bets",
        {}
      );
    };
  }, []);

  const Data = [
    {
      sportname: "Cricket",
      profitloss: 5000,
      commision: 300,
      totalpsl: 4700,
    },
    {
      sportname: "Football",
      profitloss: -2000,
      commision: 150,
      totalpsl: -2150,
    },
    {
      sportname: "Tennis",
      profitloss: 3500,
      commision: 200,
      totalpsl: 3300,
    },
    {
      sportname: "Basketball",
      profitloss: 1000,
      commision: 50,
      totalpsl: 950,
    },
    {
      sportname: "Hockey",
      profitloss: -500,
      commision: 30,
      totalpsl: -530,
    },
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

  return (
    <div className=" container  m-auto sm:w-full flex flex-col ">
      <NavigationTable />
      <Calendar />
      <DataTable
        columns={USER_MATCH_DETAILS_COL}
        // rowKey={buttonTitle}
        data={Data}
        entriesPerPage={10}
        // setEntriesPerPage={setEntriesPerPage}
        // searchQuery={searchTerm}
        // setSearchQuery={setSearchTerm}
        // sortField={sortField}
        // sortDirection={sortDirection}
        // onSort={handleSort}
        // currentPage={currentPage}
        // totalPages={totalPages}
        // goToPage={setCurrentPage}
        // userTypeCode={userTypeCode}
        // setIsNested={setIsNested}
        // isNested={isNested}
      />
      <DataTable
        columns={USER_MATCH_DETAILS_GAME_COL}
        data={gameData}
        entriesPerPage={10}
      />
      <DataTable
        columns={USER_MATCH_DETAILS_GAMENAME_COL}
        data={gameDetailsData}
        entriesPerPage={10}
      />
    </div>
  );
};

export default UserMatchDetails;
