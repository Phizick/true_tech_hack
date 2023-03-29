import stylePersonalPage from "./PersonalPage.module.css";

import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import styleLoginPage from "../LoginPage/LoginPage.module.css";
export const PersonalPage = () => {
  return (
    <div className={stylePersonalPage.page}>
      <div className={stylePersonalPage.contaner}>
        <h2 className={stylePersonalPage.title}>мои фильмы</h2>
        <div className={stylePersonalPage.list}>
          <Link className={styleLoginPage.link} to="/">
            <div className={stylePersonalPage.imgContainer}>
              <img className={stylePersonalPage.img} src={img} alt={"prev"} />
            </div>
          </Link>
          <Link className={styleLoginPage.link} to="/">
            <div className={stylePersonalPage.imgContainer}>
              <img className={stylePersonalPage.img} src={img} alt={"prev"} />
            </div>
          </Link>
          <Link className={styleLoginPage.link} to="/">
            <div className={stylePersonalPage.imgContainer}>
              <img className={stylePersonalPage.img} src={img} alt={"prev"} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
