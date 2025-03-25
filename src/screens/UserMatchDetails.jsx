import { useEffect } from "react";
import { Calendar } from "../components/Modal/UserMatchDetails/Calender";
import MatchTable from "../components/Modal/UserMatchDetails/MatchTable";
import { NavigationTable } from "../components/Modal/UserMatchDetails/NavigationLink";
import axios from "axios";

const UserMatchDetails = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post(
  //       "https://admin.titan97.live/Apicall/calculate_bets",
  //       {}
  //     );
  //   };
  // }, []);
  return (
    <div className=" container sm:w-full flex flex-col ">
      <NavigationTable />
      <Calendar />
      <MatchTable />
    </div>
  );
};

export default UserMatchDetails;
