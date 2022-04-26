import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { BsFilterLeft } from "react-icons/bs";
import Menu from "../Menu/Menu.jsx";
import Modal from '../Filter/FilterModal'
import axios from "axios";

export default function Page() {
  const [menu, setMenu] = useState(1);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const showModal = ()=> {
   setShow(!show)
  }

  useEffect(() => {
    const fetchDataFunc = async () => {
      const res = await axios.get("https://assessment.api.vweb.app/rides");
      console.log(res.data);
      setData(res.data);
    };
    fetchDataFunc();
  }, []);

  return (
    <div className={styles.back}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3>Nearest rides</h3>
          <h3>Upcoming rides()</h3>
          <h3>Nearest rides()</h3>
        </div>
        <div className={styles.right} onClick={showModal}>
          <BsFilterLeft className={styles.icon} />
          <h3>Filters</h3>
        </div>
        {show && <Modal className={styles.modal}/>}
      </div>
      {data
        ? data.map((item) => {
            return <Menu cardData={item} />;
          })
        : null}
    </div>
  );
}
