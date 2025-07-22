import { useLocation, useParams } from "react-router";
import ImageGallery from "../components/container/ImageGallery";
import VideoGallery from "../components/container/VideoGallery";
import PageLayout from "../layout/PageLayout";
// import SectionHeading from "../components/ui/SectionHeading";
import LinkButton from "../components/ui/LinkButton";
import SectionHeading from "../components/ui/SectionHeading";
import ImagesSingle from "../components/container/ImagesSingle";
import type { Album } from "../types";
import useFetchData from "../hooks/useFetchData";

const GalleryPage = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const location = useLocation();
  const state = location.state as { title: string };

  const { data: albums, isLoading } = useFetchData<Album>(`/albums/${id}`, {});

  return (
    <PageLayout
      pageTitle={slug === "images" && id ? state?.title : "Our Gallery"}
      page={`gallery/${slug === "videos" ? "videos" : "images"}`}
    >
      {slug === "images" && id ? (
        <ImagesSingle images={albums as Album} loading={isLoading} />
      ) : (
        <section className="max-w-7xl mx-auto py-10 sm:py-16 md:py-20 pt-10">
          <div className="flex gap-4 mb-8 px-4">
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
