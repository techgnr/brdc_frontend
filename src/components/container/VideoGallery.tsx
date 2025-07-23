import useFetchData from "../../hooks/useFetchData";
import type { VideoLink } from "../../types";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import EmptyMessage from "./EmptyMessage";

const VideoGallery = () => {
  const { data: videos, isLoading } = useFetchData<VideoLink[]>(
    `/videolink/`,
    {}
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!videos || videos.length === 0) {
    return <EmptyMessage message="No videos available" />;
  }

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 px-4">
      {videos?.map((item) => (
        <div
          key={item.id}
          className="bg-white h-72 rounded-md overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group"
        >
          <ReactPlayer
            controls
            src={item.video_link}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
