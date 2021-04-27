import videos from "../../public/videoList.json";
// import Video from "../../models/Video";
// import connectDb from "../../utils/connectDb";
//
// connectDb();

export default async (req, res) => {
  // let videos = [];
  // videos = await Video.find();
  res.status(200).json({ videos });
};
