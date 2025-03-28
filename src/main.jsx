import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ChangePassword from "./screens/ChangePassword.jsx";
import DashBoard from "./screens/DashBoard.jsx";
import AccountDashboard from "./screens/Accounts.jsx";
import PasswordChangeHistory from "./screens/PasswordHistory.jsx";
import RestoreUserTable from "./screens/RestoreUser.jsx";
import CommissionTable from "./screens/Commission.jsx";
import BettingHistoryTable from "./screens/BettingHistory.jsx";
import ProfitLossTable from "./screens/PLReports.jsx";
import ProfitLossTableDownline from "./screens/DownlinePL.jsx";
import FinancialTable from "./screens/Banking.jsx";
import AuthProvider from "./services/auth/auth.context.jsx";
import FinancialDashboard from "./screens/FinancialDashboard.jsx";
import { AccountProvider } from "./services/account/account.context.jsx";
import UserMatchDetails from "./screens/UserMatchDetails.jsx";
import MarketAnalysis from "./components/Rossan/MarketAnalysis.jsx";
import ListMarket from "./components/Rossan/ListMarket.jsx";

import UserMatchDetails from "./components/UserMatchDetails.jsx";

import TestUi from "./components/Rossan/TestUi.jsx";


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <AccountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/dashboard" element={<DashBoard />} />

            <Route
              path="/password-history"
              element={<PasswordChangeHistory />}
            />

            <Route path="/password-history" element={<PasswordChangeHistory />} />

            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/commission" element={<CommissionTable />} />
            <Route path="/betting" element={<BettingHistoryTable />} />
            <Route path="/profit-loss" element={<ProfitLossTable />} />
            <Route path="/downline-pl" element={<ProfitLossTableDownline />} />
            <Route path="/restore-user" element={<RestoreUserTable />} />
            <Route path="/user-banking" element={<FinancialTable />} />

            <Route path="/market-analysis" element={<ListMarket />} />
            <Route path="/MarketDetail/:id" element={<MarketAnalysis />} />
            <Route path="/master-banking" element={<FinancialTable />} />
            <Route path="/list/user" element={<FinancialDashboard />} />
            <Route path="/user/:id" element={<UserMatchDetails />} />

            <Route path="/market-analysis" element={<MarketAnalysis />} />
            <Route path="/master-banking" element={<FinancialTable />} />
            <Route path="/list/user" element={<FinancialDashboard />} />

            <Route path="/list/master" element={<FinancialDashboard />} />
            <Route path="/list/super-master" element={<FinancialDashboard />} />
            <Route path="/list/agent" element={<FinancialDashboard />} />
            <Route path="/list/mini-admin" element={<FinancialDashboard />} />

            <Route path="*" element={() => <h2>404 Not Found</h2>} /> ṃ̇

            <Route path="/list/user/:id" element={<UserMatchDetails />} />
            <Route path="/test-ui" element={<TestUi />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />

          </Route>
        </Routes>
      </Router>
    </AccountProvider>
  </AuthProvider>
  // {/* </StrictMode> */}
);
