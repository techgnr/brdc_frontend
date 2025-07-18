import { useLocation, useParams } from "react-router";
import ImageGallery from "../components/container/ImageGallery";
import VideoGallery from "../components/container/VideoGallery";
import PageLayout from "../layout/PageLayout";
// import SectionHeading from "../components/ui/SectionHeading";
import LinkButton from "../components/ui/LinkButton";
import SectionHeading from "../components/ui/SectionHeading";
import ImagesSingle from "../components/container/ImagesSingle";
import data from "../utils/data.json";

const GalleryPage = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const location = useLocation();
  const state = location.state as { title: string };

  return (
    <PageLayout
      pageTitle={slug === "images" && id ? state?.title : "Our Gallery"}
      page={`gallery/${slug === "videos" ? "videos" : "images"}`}
    >
      {slug === "images" && id ? (
        <ImagesSingle images={data.galleryImage.find((i) => i.id === +id)} />
      ) : (
        <section className="max-w-7xl mx-auto py-20 pt-10">
          <div className="flex gap-4 mb-8">
            <LinkButton
              path="/gallery/images"
              variant={slug !== "videos" ? "primary" : "secondary"}
              className="w-32"
            >
              Images
            </LinkButton>
            <LinkButton
              path="/gallery/videos"
              variant={slug === "videos" ? "primary" : "secondary"}
              className="w-32"
            >
              Videos
            </LinkButton>
          </div>
          <SectionHeading title={slug === "videos" ? "Videos" : "Images"} />
          {slug === "videos" ? <VideoGallery /> : <ImageGallery />}
        </section>
      )}
    </PageLayout>
  );
};

export default GalleryPage;
