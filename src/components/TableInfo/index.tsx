import React from 'react';
import './table-info.scss';


interface tableProps {
    borrow: any
}


const TableInfo: React.FC<tableProps> = ({ borrow }) => {
    console.log(borrow)
    return (
        <>
        <div className="table-info">
            <h2>Total do Empréstimo</h2>
            <p>R$ {borrow.amountTaken}</p>
        </div>
        <div className="table-info">
            <h2>Qunatidade Paga</h2>
            <p>R$ {borrow.amountPayd}</p>
        </div>
        <div className="table-info">
            <h2>Juros Mensais</h2>
            <p>R$ {borrow. monthlyInterest}</p>
        </div>
        <div className="table-info">
            <h2>Valor total dos Juros</h2>
            <p>R$ {borrow.totalAmountInTaxes}</p>
        </div>
        </>
    );
}

export default TableInfo;