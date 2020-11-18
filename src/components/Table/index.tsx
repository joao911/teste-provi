import React from 'react';
import TableInfo from '../TableInfo';
import './table.scss';

interface BorrowingData {
    borrowing: any;
}

const Table: React.FC<BorrowingData> = ({ borrowing }) => {
    return (
        <div className="table">
            
                <TableInfo  borrow={borrowing} />
            
        </div>
    );
}

export default Table;