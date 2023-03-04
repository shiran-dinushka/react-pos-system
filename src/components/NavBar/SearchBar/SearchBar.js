import React from "react";
import searchIcon from '../../../assets/search.png'
import classes from './SearchBar.module.css';

const SearchBar = () =>{
    return(
        <div className={classes.outer}>
            <img src={searchIcon} className={classes.image} alt="" />
            <input type="text" className={classes.input} placeHolder={'Search'} />
        </div>
    );
}

export default SearchBar;
