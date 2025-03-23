
import React, { useState, useEffect } from 'react';
import DateRangePicker from '../components/DateRangePicker';
import DataTable from '../components/table/DataTable';
import { sortData, filterData, paginateData } from '../utils/table';

const accountStatementColumns = [
    { key: 'dateTime', label: 'Date/Time', sortable: true },
    { key: 'deposit', label: 'Deposit', sortable: true },
    { key: 'withdraw', label: 'Withdraw', sortable: true },
    { key: 'balance', label: 'Balance', sortable: true },
    { key: 'remark', label: 'Remark', sortable: false },
    { key: 'fromTo', label: 'From/To', sortable: false }
];

const AccountStatement = () => {
    const [fromDate, setFromDate] = useState('2025-03-18');
    const [toDate, setToDate] = useState('2025-03-18');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortField, setSortField] = useState('dateTime');
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [accountStatementData, setAccountStatementData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [paginatedData, setPaginatedData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const dummyData = [
            { dateTime: '2025-03-18 11:11 AM', deposit: '1000', withdraw: '-', balance: '1000', remark: 'Initial deposit', fromTo: 'Bank → demo8956' },
            { dateTime: '2025-03-19 03:30 PM', deposit: '-', withdraw: '500', balance: '500', remark: 'ATM Withdrawal', fromTo: 'demo8956 → ATM' },
            { dateTime: '2025-03-20 09:45 AM', deposit: '200', withdraw: '-', balance: '700', remark: 'Salary credit', fromTo: 'Company → demo8956' },
            { dateTime: '2025-03-21 05:15 PM', deposit: '-', withdraw: '200', balance: '500', remark: 'Online Purchase', fromTo: 'demo8956 → Amazon' }
        ];
        setAccountStatementData(dummyData);
        setFilteredData(dummyData);
    }, []);

    const fetchAccountStatement = () => {
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        const newFilteredData = accountStatementData.filter(item => {
            const [year, month, day] = item.dateTime.split(' ')[0].split('-');
            const itemDate = new Date(`${year}-${month}-${day}`);
            return itemDate >= fromDateObj && itemDate <= toDateObj;
        });
        setFilteredData(newFilteredData);
        setCurrentPage(1);
    };

    useEffect(() => {
        const searchedData = filterData(filteredData, searchQuery, accountStatementColumns.map(col => col.key));
        const sortedData = sortData(searchedData, sortField, sortDirection);
        const { paginatedData: newPaginatedData, totalPages: computedTotalPages } = paginateData(sortedData, currentPage, entriesPerPage);
        setPaginatedData(newPaginatedData);
        setTotalPages(computedTotalPages);
    }, [filteredData, searchQuery, sortField, sortDirection, currentPage, entriesPerPage]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="bg-white w-full">
            <div className="p-4 bg-gray-100 rounded-sm">
                <DateRangePicker
                    startDate={fromDate} 
                    endDate={toDate} 
                    setStartDate={setFromDate} 
                    setEndDate={setToDate} 
                    buttonTitle={"Get Statements"}
                    onButtonClick={fetchAccountStatement}
                />
            </div>
            <div>
                <DataTable
                    title="Accounts Summary"
                    data={paginatedData}
                    columns={accountStatementColumns}
                    entriesPerPage={entriesPerPage} 
                    setEntriesPerPage={setEntriesPerPage} 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    sortField={sortField} 
                    sortDirection={sortDirection} 
                    onSort={(field) => {
                        setSortField(field);
                        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                    }}
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    goToPage={goToPage}
                />
            </div>
        </div>
    );
};

export default AccountStatement;