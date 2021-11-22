import Course from "../../models/Course";
import jwt from "jsonwebtoken";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
    case "POST":
      await handlePostRequest(req, res);
      break;
    case "PUT":
      await handlePutRequest(req, res);
      break;
    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

async function handleGetRequest(req, res) {
  const { _id } = req.query;
  const course = await Course.findOne({ _id });
  res.status(200).json(course);
}


async function handlePostRequest(req, res) {
  // if (!req.body.headers.Authorization) {
  //   return res.status(401).send("No authorization token");
  // }
  try {
    // const { userId } = jwt.verify(
    //   req.body.headers.Authorization,
    //   process.env.JWT_SECRET_ADMIN
    // );

    const { name, price, shortDesc, description, imageURL, status } = req.body.params;
    const videos = [];

    // if (!name || !price || !shortDesc || !description || !imageUrl || !status) {
    //   return res.status(422).send("Course missing one or more fields");
    // }

    const course = await new Course({
      name, price, shortDesc, description, imageURL, videos, status
    }).save();
    res.status(203).send("course created");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error in creating course");
  }
}


async function handlePutRequest(req, res) {
  // if (!req.body.headers.Authorization) {
  //   return res.status(401).send("No authorization token");
  // }
  try {
    // const { userId } = jwt.verify(
    //   req.body.headers.Authorization,
    //   process.env.JWT_SECRET_ADMIN
    // );

    const { _id, name, price, shortDesc, description, imageURL, status } = req.body.params;
    const videos = [];

    // if (!name || !price || !shortDesc || !description || !imageUrl || !status) {
    //   return res.status(422).send("Course missing one or more fields");
    // }

    const course = await Course.findOneAndUpdate({ _id: _id }, { name, price, shortDesc, description, imageURL, videos, status });
    res.status(203).send("course updated");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error in updating course");
  }
}
