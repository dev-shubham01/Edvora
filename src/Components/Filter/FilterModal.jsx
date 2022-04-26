import React from "react";
import style from "./FilterModal.module.css";

function FilterModal() {
  return (
    <div className={style.modal}>
      <div>
        <div className={style.heading}>
          <div>Filters</div>
        </div>
        <hr className={style.line} />
        <div className={style.states}>
          <select
            id="cars"
            name="carlist"
            form="carform"
            className={style.state}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            id="cars"
            name="carlist"
            form="carform"
            className={style.city}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
