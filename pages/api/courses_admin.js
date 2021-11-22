import Course from "../../models/Course";
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  // if (!("authorization" in req.headers)) {
  //   return res.status(401).send("No authorization token");
  // }
  try {
    // const { userId } = jwt.verify(
    //   req.headers.authorization,
    //   process.env.JWT_SECRET_ADMIN
    // );

    const pageSize = 15;
    const totalCourses = await Course.countDocuments();
    const totalPages = Math.ceil(totalCourses / pageSize);
    const sortMethod = { name: 1 };
    let courses = [];

    courses = await Course.find()
    .sort(sortMethod)
    .limit(pageSize);

    res.status(200).json({ courses, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting courses");
  }
};
