import { useLocation } from "react-router";
import PageLayout from "./PageLayout";
import useFetchData from "../hooks/useFetchData";
import type { AboutSection } from "../types";
import Loader from "../components/container/Loader";
import EmptyMessage from "../components/container/EmptyMessage";
import SectionHeading from "../components/ui/SectionHeading";

const PageDetailsLayout = ({ url }: { url: string }) => {
  const { state } = useLocation();
  const base = window.location.pathname.split("/")[1];

  const { data, isLoading } = useFetchData<AboutSection>(
    `/${url}/${state?.id}`,
    {}
  );

  return (
    <PageLayout pageTitle={state?.name} page={`${base}`}>
      {isLoading ? (
        <div className="h-72 flex items-center justify-center">
          <Loader />
        </div>
      ) : !data ? (
        <EmptyMessage message="No data available" />
      ) : (
        <section className="max-w-7xl mx-auto px-4 py-20 pt-16">
          <SectionHeading
            title={data?.name || data?.title}
            description={data?.about_categories?.intro}
          />
          <div
            className="flex flex-col gap-4"
            dangerouslySetInnerHTML={{
              __html:
                data?.about_categories?.description ||
                data?.description ||
                data?.content,
            }}
          ></div>
        </section>
      )}
    </PageLayout>
  );
};

export default PageDetailsLayout;
