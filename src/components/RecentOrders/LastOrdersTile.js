import React from 'react';
import Orders from './Orders'
import classess from './LastOrdersTile.module.css'

const LastOdersTile = () =>{
    return(
        <div className={classess.outer}>
            <h3 className={classess.title}>TODAY ORDERS</h3>
            <Orders orderNo="#O-1026" status="IN-PROGRESS" statColor="#2980B9"/>
            <Orders orderNo="#O-1027" status="CANCELED" statColor="#C0392B"/>
            <Orders orderNo="#O-1028" status="DONE" statColor="#27AE60"/>
            <Orders orderNo="#O-1029" status="DONE" statColor="#27AE60"/>
            <Orders orderNo="#O-1030" status="IN-PROGRESS" statColor="#2980B9"/>
            <Orders orderNo="#O-1031" status="IN-PROGRESS" statColor="#2980B9"/>
        </div>
    );
}

export default LastOdersTile;