import React, {useState, useEffect} from "react";
import Header from "../components/_App/Header";
import Main from "../components/Index/Main";
import MainSmall from "../components/Index/MainSmall";
import baseUrl from "../utils/baseUrl";

export default function Home() {

  const smallScreen = false;



  return (
    <div class="pageHome">
      <div class="banner">
        <Header />
      </div>

      <div class="color-section">
        <div class="row">
          <div class="headline-text col-9">
            <p> שמי יניב מורסיאנו, הרבליסט קליני ונטורופת מזה כ 25 שנה. החל מתחילת דרכי אני מקדיש את עיקר עיסוקי לקידום רפואת הצמחים בישראל, הן כמטפל, הן כמרצה והן בתחום חומרי הגלם ורקיחתם. </p>
          </div>
          <div class="col-3"> </div>
        </div>
      </div>

      {smallScreen ? (
        <MainSmall/>
      ) : (
        <Main/>
      )}
    </div>
  )
}
