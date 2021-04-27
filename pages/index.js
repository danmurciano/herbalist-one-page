import React from "react";
import axios from "axios";
import VideoSection from "../components/Index/VideoSection";
import { Icon } from "semantic-ui-react";
import baseUrl from "../utils/baseUrl";

export default function Home() {
  // const [ video, setVideo ] = React.useState("");

  return (
    <div class="pageHome">
      <div class="banner">
        <div class="logo">
          <h1> Herbalist </h1>
          <p>יניב מורסיאנו - רפואת צמחים אינטגרטיבית</p>
        </div>
        <div class="banner-bottom">
        </div>
      </div>

      <div class="main-section row">
        <div class="">

        </div>
        <div class="main-text">
          <img class="image-yaniv" src="/images/yaniv.jpg" />
          <h3> יניב מורסיאנו - הרבליסט קליני Cl.H, נטורופת N.D וחבר איגוד ההרבליסטים האמריקאי RH(AHG) </h3>
          <p> יניב הינו אחד מבעלי חברת "ראן פארמה", חברה העוסקת בתחום הרקיחה הצמחית בפרט וצמחי המרפא בכלל. </p>
          <p> יניב משמש כמטפל כ-25 שנה, ובין היתר טיפל כנטורופת  בקופת חולים "כללית". בנוסף שימש כחלק ממקימי מרכז דוידוף שבבי"ח בלינסון, מרכז לרפואה אינטגרטיבית בחולי סרטן. יניב שימש כנטורופת והרבליסט קליני במחלקה, ועד היום משמש כקולגה ויועץ בתחום צמחי המרפא למרכז. </p>
          <p> בשנת 2003, כחלק מפעילותה של "ראן צמחים", יניב הקים לראשונה במדינת ישראל קורס תלת שנתי של הרבליסט קליני אשר קיבל הכרה ומעטפת של האיגוד האמריקאי ופעל כשלוחה של בי"ס WILD ROSE COLLEGE, אשר נמצא בקלגרי קנדה. </p>
          <p> החל משנת 2004, משמש כראש מסלול ללימודי נטורופתיה והרבליסט קליני בבי"ס "מירב" של האוניברסיטה הפתוחה על כל שלוחותיה. </p>
          <p> לפני כעשר שנים הוציא לאור שני ספרים, "רפואת צמחים אינטגרטיבית" ו "360 שאלות ותשובות", המהווים מטריה מדיקה בתחום צמחי המרפא, המשלבת גישות מודרניות ומסורתיות כאחד, ונחשבים לשני הספרים הנמכרים ביותר בארץ בתחום צמחי המרפא המערביים. </p>
        </div>
      </div>


      <div class="video-section">
        <div class="row section-title">
          <a class="section-title" href="/videos">
            <h3 class="section-title">
              הרצאות וידאו
              <i class="arrow"> <Icon name="caret left" /> </i>
            </h3>
          </a>
        </div>

        <div class="row">
          <VideoSection numberOfVideos={6} />
        </div>
      </div>
    </div>
  )
}

// Home.getInitialProps = async ctx => {
//   const url = `${baseUrl}/api/videos`;
//   const response = await axios.get(url);
//   return response.data;
// };
