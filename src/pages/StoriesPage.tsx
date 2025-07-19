import StoriesSingle from "../components/container/StoriesSingle";
import PageLayout from "../layout/PageLayout";

const StoriesPage = () => {
  return (
    <PageLayout pageTitle="Our Stories" page="stories">
      <section className="max-w-7xl mx-auto">
        <StoriesSingle />
      </section>
    </PageLayout>
  );
};

export default StoriesPage;
