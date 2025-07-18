import Programs from "../components/container/Programs";
import PageLayout from "../layout/PageLayout";

const BlogsPage = () => {
  return (
    <PageLayout pageTitle="Blogs" page="blogs">
      <section className="max-w-7xl mx-auto">
        <Programs />
      </section>
    </PageLayout>
  );
};

export default BlogsPage;
