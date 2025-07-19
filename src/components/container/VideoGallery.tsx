import data from "../../utils/data.json";
import ReactPlayer from "react-player";

const VideoGallery = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {data.galleryVideo.map((item) => (
        <div
          key={item.id}
          className="bg-white h-64 rounded-md overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group"
        >
          <ReactPlayer
            controls
            src={item.video}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
