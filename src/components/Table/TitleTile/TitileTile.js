import React from "react";
import classes from './TitleTile.module.css'
import edit from '../../../assets/edit.png'

const TitleTile = () =>{
    return(
        <div>
            <div className={classes.label}>
                <span className={classes.tableNo}>
                    Table 05
                </span>
                <img src={edit} alt="edit" className={classes.edit} />
                
            </div>
            <div className={classes.title}>
                <span className={classes.name}>Customer Name</span>
                <span className={classes.id}>Cashier ID: C0155</span>
            </div>
            
        </div>
        
    );
}

export default TitleTile;