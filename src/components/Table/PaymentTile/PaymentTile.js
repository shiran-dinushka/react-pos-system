import React from "react";
import classes from './PaymentTile.module.css'

const PaymentTile = () =>{
    return(
        <div className={classes.outer}>
            <div className={classes.paymentCategories}>
                <div className={classes.SubTotal}>
                <span >Sub Total</span>
                <span >RS. 7895.36</span>
            </div>
            <div className={classes.tax}>
                <span >TAX 10%</span>
                <span >RS. 789.50</span>
            </div>
            </div>
            
            <div className={classes.totalPayment}>
                <span className={classes.paymentTile}>Total Payment</span>
                <button className={classes.totalPrice} src="">RS. 9000.00</button>
                
            </div>
        </div>
    );
}

export default PaymentTile;