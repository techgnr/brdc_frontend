import useFetchData from "../hooks/useFetchData";
import DOMPurify from "dompurify";
import type { TermsCondition } from "../types";
import Loader from "../components/container/Loader";
import EmptyMessage from "../components/container/EmptyMessage";
import SectionHeading from "../components/ui/SectionHeading";
import PageLayout from "../layout/PageLayout";

const TermsConditions = () => {
  const { data, isLoading } = useFetchData<TermsCondition>(`/terms/`, {});

  return (
    <PageLayout pageTitle={"Terms & Conditions"} page={"terms"}>
      {isLoading ? (
        <div className="h-72 flex items-center justify-center">
          <Loader />
        </div>
      ) : !data ? (
        <EmptyMessage message="No data available" />
      ) : (
        <section className="max-w-7xl mx-auto px-4 py-10 sm:py-16 md:py-20 pt-16">
          <SectionHeading
            title={"Terms & Conditions"}
            description={"Our Terms & Conditions"}
          />
          <div
            className="flex flex-col gap-4"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.content || ""),
            }}
          ></div>
        </section>
      )}
    </PageLayout>
  );
};

export default TermsConditions;
