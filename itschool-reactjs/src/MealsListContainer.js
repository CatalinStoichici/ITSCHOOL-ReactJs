import React from "react";
import MealDetailsComponent from "./MealDetailsComponent";
import TitleComponent from "./TitleComponent";

const style = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
  },
  //col: {
  //  flex:"0 0 33.333333%",
  //   maxWidth: "33.333333%"
  // }
};
// MealDetailsComponent - <h3>, <p>, <a>
const MealsListContainer = () => {
  return (
    <div style={{ width: "100%" }}>
      <TitleComponent text="Latest meals"/>
      <div style={style.row}>
        <div style={style.col}>
          <MealDetailsComponent
            imageSRC="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
            title="Picy Arrabiata Penne"
            area="Itialian"
            category="Vegetarian"
          />
        </div>
        <div style={style.col}>
          <MealDetailsComponent
            imageSRC="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
            title="Chicken Handi"
            area="Indian"
            category="Chicken"
          />
        </div>
        <div style={style.col}>
          <MealDetailsComponent
            imageSRC="https://www.themealdb.com/images/media/meals/1550440197.jpg"
            title="Salmon Eggs Eggs Benedict"
            area="American"
            category="Breakfast"
          />
        </div>
      </div>
    </div>
  );
};

export default MealsListContainer;
