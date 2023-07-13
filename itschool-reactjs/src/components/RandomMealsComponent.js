import React from "react";

const style = {
    details: {
      backgroundColor: "blanchedalmond",
      borderRadius: "10px",
      padding: "0px 15px 0px 85px",
    },
    detailsWrapper: {
      padding: "10px 0px",
      backgroundColor: "transparent",
      transform: "translate(-75px, 0px)",
      zIndex: "-1",
    },
    title: {
      fontSize: "14px",
      color: "black",
    },
    image: {
      borderRadius: "50%",
      border: "2px solid black",
      width: 100,
      height: 100,
    },
    info: {
      color: "grey",
    },
    label: {
      color: "black",
      fontSize: "10px",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      fontFamily: 'Arial'
    },
  };
function RandomMealsComponent(props) {
    return (
        <>
          <div style={style.wrapper}>
            <img src={props.imageSRC} alt={props.title} style={style.image}></img>
            <div style={style.detailsWrapper}>
              <div style={style.details}>
                <h3 style={style.title}>{props.title}</h3>
                <div style={style.info}>
                  <p>
                    <span style={style.label}>Area: </span>
                    {props.area}
                  </p>
                  <p>
                    <span style={style.label}>Category: </span>
                    {props.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default RandomMealsComponent;