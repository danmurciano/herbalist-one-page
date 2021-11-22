import videos from "../../public/course1.json";

export default function VideoPlayer({ selectedVideo }) {
  console.log("b", selectedVideo);
  
  return (
    <iframe
      src={`https://player.vimeo.com/video/${videos[selectedVideo].url}`}
      width="100%" height="100%" frameborder="0"
      allow="autoplay; fullscreen" allowfullscreen>
    </iframe>
  );
}
