// COLUMN NAME REPRESENTS COMPONENT IN WHICH IT IS USED

// data={
//     "sportName": "Cricket",
//     "uplineProfit": "100",
//     "downlineProfit": "200",
//     "commission": "300"
//   }
// key----> sportName
//  label ----> Cricket
// sortable ---> columns supports sorting

// use datakey for duplicate values

export const PLREPORTS_COL = [
  { key: "sportName", label: "Sport Name", align: "left", sortable: true },
  {
    key: "uplineProfit",
    label: "Upline Profit/Loss",
    align: "center",
    sortable: true,
  },
  {
    key: "downlineProfit",
    label: "Downline Profit/Loss",
    align: "center",
    sortable: true,
  },
  { key: "commission", label: "Commission", align: "center", sortable: true },
];

export const RESTORE_USER_COL = [
  { key: "username", label: "User Name", sortable: true },
  { key: "name", label: "Name", sortable: false },
  { key: "date", label: "Date & Time", sortable: true },
  { key: "action", label: "Action", sortable: false },
];

export const PASSWORD_HISTORY_COL = [
  { key: "username", label: "Username", sortable: true },
  { key: "remarks", label: "Remarks" },
  { key: "date", label: "Date & Time", sortable: true },
];

export const getFinancialCol = (actionsConfig = {}) => {
  return [
    { label: "Username", key: "user_id", sortable: true, format: "username" },
    {
      label: "Credit Ref.",
      key: "credit_ref",
      dataKey: "ref_sd_id",
      sortable: true,
    },
    { label: "Partnership", key: "partnership", sortable: true },
    {
      label: "Balance",
      key: "balance",
      dataKey: "balance",
      sortable: true,
      format: "currency",
    },
    {
      label: "Exposure",
      key: "bet_balance",
      dataKey: "bet_balance",
      sortable: true,
      format: "currency",
    },
    {
      label: "Avail. Bal.",
      key: "available_balance",
      dataKey: "balance",
      sortable: true,
      format: (row) =>
        new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(row.balance - row.bet_balance),
    },
    { label: "Ref. P/L", key: "ref_pl", dataKey: "ref_sd_id", sortable: true },
    { label: "Status", key: "status", sortable: true, format: "status" },
    {
      label: "Actions",
      key: "actions",
      sortable: false,
      actionsConfig: (row) =>
        Object.keys(actionsConfig).map((actionKey) => ({
          icon: actionsConfig[actionKey].icon,
          onClick: () => actionsConfig[actionKey].onClick(row),
          color: actionsConfig[actionKey].color || "gray",
        })),
    },
  ];
};

// render: (row) => (
//   <div className="flex gap-2">
//     <button onClick={() => handlePayment(row)} className="p-1 bg-gray-200 rounded">
//       <DollarSign size={18} className="text-gray-600" />
//     </button>
//     <button onClick={() => handleSettings(row)} className="p-1 bg-gray-200 rounded">
//       <Settings size={18} className="text-gray-600" />
//     </button>
//     <button onClick={() => handleProfile(row)} className="p-1 bg-gray-200 rounded">
//       <User size={18} className="text-gray-600" />
//     </button>
//     <button onClick={() => handleLock(row)} className="p-1 bg-gray-200 rounded">
//       <Lock size={18} className="text-gray-600" />
//     </button>
//     <button onClick={() => handleDelete(row)} className="p-1 bg-gray-200 rounded">
//       <Trash2 size={18} className="text-red-500" />
//     </button>
//   </div>
// ),

export const DOWNLINE_PROFIT_COL = [
  { key: "sportName", label: "Sport Name", align: "left", sortable: true },
  {
    key: "uplineProfit",
    label: "Upline Profit/Loss",
    align: "center",
    sortable: true,
  },
  {
    key: "downlineProfit",
    label: "Downline Profit/Loss",
    align: "center",
    sortable: true,
  },
  { key: "commission", label: "Commission", align: "center", sortable: true },
];

export const COMMISSION_COL = [
  { key: "agent", label: "Agent Name", sortable: true },
  { key: "turnover", label: "Turn Over", sortable: true },
  { key: "commission", label: "Commission", sortable: true },
  { key: "action", label: "Action" },
];

export const BETTING_HISTORY_COL = [
  { key: "userName", label: "User Name", sortable: true },
  { key: "sportName", label: "Sport Name", sortable: true },
  { key: "event", label: "Event", sortable: true },
  { key: "market", label: "Market", sortable: true },
  { key: "selection", label: "Selection", sortable: true },
  { key: "type", label: "Type", sortable: true },
  { key: "oddsReq", label: "Odds Req.", sortable: true },
  { key: "stack", label: "Stack", sortable: true },
  { key: "placeTime", label: "Place Time", sortable: true },
  { key: "settleTime", label: "Settle Time", sortable: true },
];

export const BANKING_COL = [
  { field: "UID", label: "UID", sortable: true, key: "uid" },
  {
    field: "Balance",
    label: "Balance",
    sortable: true,
    format: "currency",
    key: "balance",
  },
  {
    field: "Available D / W",
    label: "Available D / W",
    sortable: true,
    key: "availabledw",
  },
  { field: "Exposure", label: "Exposure", key: "exposure" },
  {
    field: "Credit Reference",
    label: "Credit Reference",
    sortable: true,
    key: "creditreference",
  },
  { field: "Reference P/L", label: "Reference P/L", key: "referenceP/L" },
  { field: "Deposit/Withdraw", label: "Deposit/Withdraw", key: "deposit" },
  { field: "Remark", label: "Remark", key: "remark" },
];

export const ACTIVITY_LOG_COL = [
  { key: "date", label: "Login Date & Time", sortable: false },
  { key: "status", label: "Login Status", sortable: false },
  { key: "ip", label: "IP Address", sortable: false },
  { key: "isp", label: "ISP", sortable: false },
  { key: "location", label: "City/State/Country", sortable: false },
];

export const ACCOUNT_STATEMENT_COL = [
  { key: "dateTime", label: "Date/Time", sortable: true },
  { key: "deposit", label: "Deposit", sortable: true },
  { key: "withdraw", label: "Withdraw", sortable: true },
  { key: "balance", label: "Balance", sortable: true },
  { key: "remark", label: "Remark", sortable: false },
  { key: "fromTo", label: "From/To", sortable: false },
];

export const USER_MATCH_DETAILS_COL = [
  {
    key: "sportname",
    label: "Sport Name",
    format: "eventname",
  },
  {
    key: "profitloss",
    label: "Profit & Loss",
    format: "profit",
  },
  {
    key: "commision",
    label: "Commission",
  },
  {
    key: "totalpsl",
    label: "Total P&L",
    format: "profit",
  },
];

export const USER_MATCH_DETAILS_GAME_COL = [
  {
    key: "sportname",
    label: "Sport Name",
    format: "makelink",
  },
  {
    key: "eventname",
    label: "Event Name",
    format: "eventname",
  },
  {
    key: "profitloss",
    label: "Profit & Loss",
    format: "profit",
  },
  {
    key: "commision",
    label: "Commission",
  },
  {
    key: "totalpsl",
    label: "Total P&L",
    format: "profit",
  },
];

export const USER_MATCH_DETAILS_GAMENAME_COL = [
  {
    key: "sportname",
    label: "Sport Name",
    format: "makelink",
  },
  {
    key: "eventname",
    label: "Event Name",
    format: "makelink",
  },
  {
    key: "marketname",
    label: "Market Name",
    format: "marketname",
  },
  {
    key: "result",
    label: "Result",
  },
  {
    key: "profitloss",
    label: "Profit & Loss",
    format: "profit",
  },
  {
    key: "commision",
    label: "Commission",
  },
  {
    key: "settletime",
    label: "Settle Time",
  },
];


// export const 