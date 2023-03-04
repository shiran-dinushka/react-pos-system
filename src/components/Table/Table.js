import React from "react";
import PaymentTile from "./PaymentTile/PaymentTile";
import PurchaseItemTile from "./PurchaseItemsTile/PurchaseItemTile";
import classes from './Table.module.css'
import TitleTile from "./TitleTile/TitileTile";

const Table = () =>{
    return(
        <div>
            <div className={classes.title}>
                <TitleTile />
            </div>
            <div className={classes.upperTile}>
                <PurchaseItemTile count="10" foodName="Roast Chicken (L)" price="5463.00"/>
                <PurchaseItemTile count="05" foodName="Fried Rice (M)" price="1600.00"/>
                <PurchaseItemTile count="01" foodName="Cheese Kottu (M)" price="1000.00"/>
                <PurchaseItemTile count="01" foodName="Faluda (L)" price="560.00"/>
                <PurchaseItemTile count="01" foodName="Minchi" price="100.00"/>
                <PurchaseItemTile count="15" foodName="Yohurt" price="1500.00"/>
                
            </div>
            <div className={classes.lowerTile}>
                <PaymentTile />
            </div>
        </div>
        
    );
}

export default Table;