import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Checkout.css";


const testBotFood = [
    "https://spoonacular.com/recipeImages/661365-556x370.jpg",
    "https://spoonacular.com/recipeImages/715544-556x370.jpg",
    "https://spoonacular.com/recipeImages/716279-556x370.jpg",
    "https://spoonacular.com/recipeImages/645978-556x370.jpg",
];

const Checkout = (props) => {
    const location = useLocation()
    let userFoodCopy = location.state
    console.log(userFoodCopy)
    // function arrayMatch(userFoodCopy, testBotFood) {
    //     const matchFood = [];
    //     for (let i = 0; i < userFoodCopy.length; i++) {
    //         for (let j = 0; j < testBotFood.length; j++) {
    //             if (userFoodCopy[i] === testBotFood[j]) {
    //                 matchFood.push(userFoodCopy[i]);
    //             }
    //         }
    //     }
    //     return matchFood;
    // }
    // const arrayOfMatches = arrayMatch(userFoodCopy, testBotFood);


    // function arrayNotMatch(userFoodCopy, testBotFood) {
    //     const noMatchFood = [];
    //     for (let i = 0; i < userFoodCopy.length; i++) {
    //         for (let j = 0; j < testBotFood.length; j++) {
    //             if (
    //                 userFoodCopy[i] !== testBotFood[j] &&
    //                 !noMatchFood.includes(userFoodCopy[i])
    //             ) {
    //                 noMatchFood.push(userFoodCopy[i]);
    //             }
    //         }
    //     }
    //     return noMatchFood;
    // }
    // //   console.log(arrayNotMatch(userFoodCopy, testBotFood));

    // return (
    //     <div className="checkout">
    //         {/* <nav>
    //           <Link to="/" style={{textDecoration:"none"}}>
    //             <button className="headerButton" id="backButton">
    //               &#9665;
    //             </button>
    //           </Link>
    //         </nav> */}
    //         <h2>Match</h2>
    //         <div className="checkout__checkMatch">
    //             {arrayOfMatches.map((copyFood) => (
    //                 <div className="checkout__images--grid">
    //                     {/* <Link
    //               to={{
    //                 pathname: "/Messages",
    //                 state: { arrayOfMatches },
    //               }}
    //               key={copyFood}
    //             > */}
    //                     <img
    //                         src={copyFood}
    //                         alt="userPics"
    //                         key={copyFood}
    //                         className="checkout__images"
    //                     />
    //                     {/* </Link> */}
    //                 </div>
    //             ))}
    //         </div>
    //         <h2>Favorites</h2>
    //         <div className="checkout__checkMatch">
    //             {arrayNotMatch(userFoodCopy, testBotFood).map((noMatch) => (
    //                 <div className="checkout__images--grid" >
    //                     <img src={noMatch} alt="userPics" key={noMatch} className="checkout__images" />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
};

export default Checkout;
