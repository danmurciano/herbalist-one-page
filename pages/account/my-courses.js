import MyCourses from "../../components/Account/MyCourses";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";

export default function Account({ courses }) {

  return (
    <div class="pageHome">
      <div class="banner-video">
        <div class="title-video-div">
          <p class="title-video"> קורסים </p>
        </div>
      </div>

      <div class="courses-list">
        <MyCourses products={courses}/>
      </div>
    </div>
  )
}


Account.getInitialProps = async ctx => {
  // const { tokenAdmin } = parseCookies(ctx);
  // if (!tokenAdmin) {
  //   redirectUser(ctx, "/login");
  // }
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 15;
  const url = `${baseUrl}/api/courses_admin`;
  // const payload = { headers: { Authorization: tokenAdmin } };
  const response = await axios.get(url);
  return response.data;
};
