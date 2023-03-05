import React from 'react';
import classes from './CartItem.module.css';

const CartItem = () => {
   return (
      <div className={classes.container} >
         <div className={classes.countContainer} >
            <span>12</span>
         </div>
         <div className={classes.titleHolder} >
            <span className={classes.mainTitle} >Roast Chicken</span>
            <span className={classes.priceTitle} >5400.36</span>
         </div>
      </div>
   );
}

export default CartItem;