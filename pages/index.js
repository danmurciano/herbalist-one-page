import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../components/_App/Header";
import Main from "../components/Index/Main";
import MainSmall from "../components/Index/MainSmall";
import { Icon, Image } from "semantic-ui-react";
import baseUrl from "../utils/baseUrl";

export default function Home() {

  const smallScreen = isSmallScreen();

  function isSmallScreen() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (windowSize.width < 840) {
      return true;
    } else {
      return false;
    }
  }


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
