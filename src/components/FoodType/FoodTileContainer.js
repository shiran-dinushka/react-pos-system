import React from "react";
import FoodTypeTile from "./FoodTypeTile";
import classes from "./FoodTileContainer.module.css"
import img1 from "../../assets/breakfast.png"
const FoodTileContainer = () =>{
    return(
        <div className={classes.container}>
            <FoodTypeTile source={img1} heading="Breakfast" defColor="#B4FFF6" onColor="#2FFFE6" />
            <FoodTypeTile source={img1} heading="Dinner" defColor="#A4FFB8" onColor="#45FF6E" />
            <FoodTypeTile source={img1} heading="Lunch" defColor="#FFF6A4" onColor="#FFEA2C" />
            <FoodTypeTile source={img1} heading="Drinks" defColor="#9BB7FF" onColor="#2764FF" />
            <FoodTypeTile source={img1} heading="Desserts" defColor="#FFB4B4" onColor="#FF8282" />
            <FoodTypeTile source={img1} heading="Soup" defColor="#FDB4FF" onColor="#FC7CFF" />

        </div>
    );
}

export default FoodTileContainer;