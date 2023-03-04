import React from 'react';
import classes from './SingleItem.module.css'
import Minus from '../../assets/minus.png'
import Add from '../../assets/add.png'

const SingleItem = () =>{
    return(
        <div className={classes.outer}>
            <span className={classes.time}>15 Minitues</span>
            <div className={classes.titleHolder}>
                <span className={classes.mainTitle}>Roast Chicken</span>
                <spanc className={classes.subTitle}>Rs. 500.00</spanc>
            </div>
            <div className={classes.count}>
                <span ><img src={Minus} alt="minus"className={classes.minus} /></span>
                <span className={classes.number}>2</span>
                <span ><img src={Add} alt="add" className={classes.add}/></span>
                
            </div>
        </div>
    );
}

export default SingleItem;