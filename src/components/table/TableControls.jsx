// Table Controls Component
const TableControls = ({ entriesPerPage, setEntriesPerPage, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4">
      <div className="flex items-center mb-2 sm:mb-0">
        <span className="mr-2">Show</span>
        <select
          value={entriesPerPage}
          onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          className="border border-gray-300 rounded p-1 w-16"
        >
          {[10, 25, 50, 100].map(size => <option key={size} value={size}>{size}</option>)}
        </select>
        <span className="ml-2">entries</span>
      </div>
      <div className="flex items-center">
        <label className="mr-2">Search:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded p-1 w-48"
        />
      </div>
    </div>
  );
};

export default TableControls;