import React from 'react';
import TableInfo from '../TableInfo';
import './table.scss';

const Table: React.FC = () => {
    return (
        <div className="table">
            <TableInfo/>
            <TableInfo/>
            <TableInfo/>
            <TableInfo/>
        </div>
    );
}

export default Table;