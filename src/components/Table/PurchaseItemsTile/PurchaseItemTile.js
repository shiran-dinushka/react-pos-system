import React from "react";
import classes from './PurchaseItemTile.module.css'

const PurchaseItemTile = (props) =>{
    return(
        <div className={classes.itemTile}>
            <span className={classes.count}> {props.count}</span>
            <div className={classes.item}>
                <span className={classes.itemName}>{props.foodName}</span>
                <span className={classes.price}>{props.price}</span>
            </div>
        </div>
    );
}

export default PurchaseItemTile;