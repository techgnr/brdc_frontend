import PaginatedData from "../components/PaginatedData";
import LinkButton from "../components/ui/LinkButton";
import SectionHeading from "../components/ui/SectionHeading";
import PageLayout from "../layout/PageLayout";

const PublicationDocumentsPage = () => {
  const data = Array.from({ length: 14 }, (_, i) => `Post #${i + 1}`);
  return (
    <PageLayout
      pageTitle="Publication and Documents"
      page="publication-document"
    >
      <section className="max-w-7xl mx-auto py-20">
        <SectionHeading title="Publication and Documents" />
        <table className="w-full">
          <thead className="bg-green-600">
            <tr className="text-white h-14">
              <th className="px-5 text-start">S.N</th>
              <th className="px-5 text-start">Publication and Documents</th>
              <th className="px-5 text-start">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <PaginatedData data={data} itemsPerPage={10}>
              {(items) => (
                <>
                  {items.map((item, index) => (
                    <tr
                      className={`border-b h-14 border-gray-200 ${
                        index % 2 != 0 ? "bg-gray-50" : ""
                      }`}
                    >
                      <td className="px-5 font-semibold text-gray-500">
                        {item.split("#")[1]}
                      </td>
                      <td className="px-5 font-semibold text-gray-500">
                        Publication {index + 1}
                      </td>
                      <td className="px-5">
                        <LinkButton path="#" className="px-6 h-8">
                          Download
                        </LinkButton>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </PaginatedData>

            {/* {data.map((_, index) => (
              <tr
                className={`border-b h-14 border-gray-200 ${
                  index % 2 != 0 ? "bg-gray-50" : ""
                }`}
              >
                <td className="text-center font-semibold text-gray-500">
                  {index + 1}
                </td>
                <td className="text-center font-semibold text-gray-500">
                  Publication {index + 1}
                </td>
                <td className="text-center">
                  <LinkButton path="#" className="px-6 h-8">
                    Download
                  </LinkButton>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </section>
    </PageLayout>
  );
};

export default PublicationDocumentsPage;
