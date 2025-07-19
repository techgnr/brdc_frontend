import TeamsSection from "../components/container/TeamsSection";
import PageLayout from "../layout/PageLayout";

const TeamPage = () => {
  return (
    <PageLayout pageTitle="Meet Our Team" page="team">
      <section className="max-w-7xl mx-auto">
        <TeamsSection />
        <TeamsSection />
      </section>
    </PageLayout>
  );
};

export default TeamPage;
