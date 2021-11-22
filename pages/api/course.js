import videos from "../../public/course1.json";
// import Video from "../../Models/Video";
// import connectDb from "../../utils/connectDb";
//
// connectDb();

export default async (req, res) => {
  const { _id } = req.query;
  // const video = await Video.findOne({ _id });
  const video = videos.find(e => e._id === _id);
  res.status(200).json(video);
}
