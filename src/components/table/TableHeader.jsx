const TableHeader = ({ columns, sortField, sortDirection, onSort }) => {
  return (
    <thead>
      <tr className="bg-gray-200">
        {columns.map(({ key, label, sortable },index) => (
          <th
            key={`key-${index}`}
            className={`border border-gray-300 p-2 text-left ${sortable ? 'cursor-pointer' : ''}`}
            onClick={() => sortable && onSort(key)}
          >
            {label} 
            {sortable && sortField === key && (
              <span className="ml-1">{sortDirection === 'asc' ? '▲' : '▼'}</span>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
