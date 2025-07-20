import EmptyMessage from "../components/container/EmptyMessage";
import Loader from "../components/container/Loader";
import PaginatedData from "../components/PaginatedData";
import SectionHeading from "../components/ui/SectionHeading";
import useFetchData from "../hooks/useFetchData";
import PageLayout from "../layout/PageLayout";
import type { Document } from "../types";
import Button from "../components/ui/Button";
import { downloadFileFromUrl } from "../utils/helper";

const PublicationDocumentsPage = () => {
  const { data: documents, isLoading } = useFetchData<Document[]>(
    "/publicationanddocuments/",
    {}
  );
  return (
    <PageLayout
      pageTitle="Publication and Documents"
      page="publication-document"
    >
      <section className="max-w-7xl mx-auto py-20">
        <SectionHeading title="Publication and Documents" />
        {isLoading ? (
          <Loader />
        ) : !documents ? (
          <EmptyMessage message="No data available" />
        ) : (
          <table className="w-full">
            <thead className="bg-primary">
              <tr className="text-white h-14">
                {documents.length > 0 &&
                  Object.keys(documents[0] as Record<string, any>).map(
                    (key) => (
                      <th className="px-5 text-start" key={key}>
                        {key === "id"
                          ? "S.N"
                          : key === "title"
                          ? "Publication and Documents"
                          : key === "created_at"
                          ? "Upload Date"
                          : "Action"}
                      </th>
                    )
                  )}
              </tr>
            </thead>
            <tbody className="bg-white">
              <PaginatedData data={documents} itemsPerPage={10}>
                {(items) => (
                  <>
                    {items.map((docs, index) => (
                      <tr
                        className={`border-b h-14 border-gray-200 ${
                          index % 2 != 0 ? "bg-gray-50" : ""
                        }`}
                      >
                        <td className="px-5 font-semibold text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-5 font-semibold text-gray-500">
                          {docs.title}
                        </td>
                        <td className="px-5">
                          {/* <Link to={docs?.attchments} className="px-6 h-8">
                            Download
                          </Link> */}
                          <Button
                            variant="primary"
                            className="px-6 h-8"
                            onClick={() =>
                              downloadFileFromUrl(docs?.attchments, docs?.title)
                            }
                          >
                            Download
                          </Button>
                        </td>
                        <td className="px-5 font-semibold text-gray-500">
                          {docs.created_at?.slice(0, 10)}
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </PaginatedData>
            </tbody>
          </table>
        )}
      </section>
    </PageLayout>
  );
};

export default PublicationDocumentsPage;
