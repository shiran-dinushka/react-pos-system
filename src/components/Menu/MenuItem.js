import React from "react";
import classes from './MenuItem.module.css';

const MenuItem = () =>{
    return(
        <div className={classes.outer}>
            <span className={classes.item}>Dashboard</span>
        </div>
    );
}

export default MenuItem;