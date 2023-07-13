import React from 'react';
import logo from "../logo.svg"

import RandomMealsComponent from '../components/RandomMealsComponent';


function RandomMealsContainer() {
    return (
        <div style={{display: "flex"}}>
             <RandomMealsComponent
            imageSRC="https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"
            title="Mediterranean Pasta Salad"
            area="Itialian"
            category="Pasta"
          />
             <RandomMealsComponent 
            imageSRC="https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg" 
            title="Cream Cheese Tart"
            area="American"
            category="Vegetarian"
          />
             <RandomMealsComponent
            imageSRC="https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg"
            title="Potato Gratin with Chicken"
            area="Itialian"
            category="Vegetarian"
          />
            <RandomMealsComponent imageSRC={logo}/>
            <RandomMealsComponent imageSRC={logo}/>
            <RandomMealsComponent imageSRC={logo}/>
        </div>

    );
}

export default RandomMealsContainer;