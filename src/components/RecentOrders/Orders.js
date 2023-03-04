import React from "react";
import classess from './Orders.module.css' 

const Orders = (props) =>{
    return(
        <div>

            <div className={classess.outer}>
                <span className={classess.orderNo}>{props.orderNo}</span>
                <span style = {{backgroundColor:props.statColor}}className={classess.status}>{props.status}</span>
            
            </div>
            
        </div>
        
    );
}

export default Orders;