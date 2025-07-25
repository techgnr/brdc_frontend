import BlogsSingle from "../components/container/BlogsSingle";
import PageLayout from "../layout/PageLayout";

const BlogsPage = () => {
  return (
    <PageLayout pageTitle="Blogs" page="blogs">
      <section className="max-w-7xl mx-auto bg-white">
        <BlogsSingle />
      </section>
    </PageLayout>
  );
};

export default BlogsPage;
