import React from "react";
import MealsListContainer from "./MealsListContainer";
import RandomMealsContainer from "./RandomMealsComponen";
import SideContainer from "./SideContainer";

function HomepageView() {
    return (
    <>
    <SideContainer/>
    <div style={{display: "flex", flexDirection: 'flex-row'}}>
    <RandomMealsContainer/>
    <MealsListContainer/>
    </div>
    </>
    );
}

export default HomepageView;