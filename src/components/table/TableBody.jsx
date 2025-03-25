import { useContext } from "react";
import ActionButtons from "../ActionButtons";
import { AccountContext } from "../../services/account/account.context";

const formatValue = (
  value,
  format,
  row,
  rowKey = "",
  userTypeCode,
  onGetDownLineData,
  setIsNested,
  isNested
) => {
  if (typeof format === "function") {
    return format(row);
  }
  if (format === "username") {
    return (
      <div
        className={`flex flex-col items-center gap-2 ${
          isNested ? "text-black" : "text-blue-500"
        }`}
        onClick={async () => {
          if (userTypeCode && !isNested) {
            console.log(row.fs_id, userTypeCode);

            await onGetDownLineData(row.fs_id, userTypeCode);
            setIsNested(true);
          }
        }}
      >
        {rowKey.length > 0 && rowKey && (
          <span
            className={`px-2 py-1 text-xs font-bold rounded bg-green-500 text-white 
       `}
          >
            {rowKey}
          </span>
        )}
        <span
          className={`text-blue-500 ${
            userTypeCode ? "cursor-pointer hover:underline" : ""
          }`}
        >
          {value}
        </span>
      </div>
    );
  }

  if (format === "currency") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  }

  if (format === "status") {
    return (
      <span
        className={`px-2 py-1 text-xs font-bold rounded ${
          value === 1 ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {value === 1 ? "Online" : "Offline"}
      </span>
    );
  }

  return value;
};

const TableBody = ({
  data,
  columns,
  rowKey,
  userTypeCode,
  setIsNested,
  isNested,
}) => {
  const { onGetDownLineData } = useContext(AccountContext);
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            {columns.map(
              ({ key, format, dataKey, actionsConfig }, colIndex) => {
                const cellValue = row[dataKey || key];

                return (
                  <td
                    key={`${key}-${colIndex}`}
                    className="border border-gray-300 p-2 text-right"
                  >
                    {actionsConfig ? (
                      <ActionButtons actions={actionsConfig(row)} fs_id={row.fs_id} data={row}/>
                    ) : format ? (
                      formatValue(
                        cellValue,
                        format,
                        row,
                        rowKey,
                        userTypeCode,
                        onGetDownLineData,
                        setIsNested,
                        isNested
                      )
                    ) : (
                      cellValue
                    )}
                  </td>
                );
              }
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={columns.length}
            className="border border-gray-300 p-4 text-center"
          >
            No data!
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
