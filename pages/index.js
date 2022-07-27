import React, {useState, useEffect} from "react";
import Header from "../components/_App/Header";
import Main from "../components/Index/Main";
import MainSmall from "../components/Index/MainSmall";


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
    <div className="pageHome">
      <Header />
      <div className="banner">

      </div>

      <div className="color-section">
        <div className="row">
          <div className="headline-text col-9">
            <p> שמי יניב מורסיאנו, הרבליסט קליני ונטורופת מזה כ 25 שנה. החל מתחילת דרכי אני מקדיש את עיקר עיסוקי לקידום רפואת הצמחים בישראל, הן כמטפל, הן כמרצה והן בתחום חומרי הגלם ורקיחתם. </p>
          </div>
          <div className="col-3"> </div>
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
