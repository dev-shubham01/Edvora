import React from "react";
import style from "./menu.module.css";
import Moment from "react-moment";

export default function Menu({ cardData }) {
  {
    console.log("card data", cardData);
  }
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={cardData.map_url} />
      </div>
      <div className={style.context}>
        <div className={style.content}>
          <h3>Ride Id: {cardData.id}</h3>
          <h3>Origin Station:{cardData.origin_station_code}</h3>
          <h3>Station Path: [ {cardData.station_path.toString()} ]</h3>
          <h3>
            Date:
            <Moment format="Do MMMM YYYY, H:mm">{cardData.date}</Moment>
          </h3>
          <h3>Distance:</h3>
        </div>
        <div className={style.places}>
          <h3>City Name</h3>
          <h3>State Name</h3>
        </div>
      </div>
    </div>
  );
}
