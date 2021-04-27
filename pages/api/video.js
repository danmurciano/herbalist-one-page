import Video from "../../models/Video";
import connectDb from "../../utils/connectDb";

connectDb();

export default async (req, res) => {
//   switch (req.method) {
//     case "GET":
//       await handleGetRequest(req, res);
//       break;
//
//     default:
//       res.status(405).send(`Method ${req.method} not allowed`);
//       break;
//   }
// };
//
// async function handleGetRequest(req, res) {
  const { _id } = req.query;
  const video = await Video.findOne({ _id });
  res.status(200).json(video);
}
