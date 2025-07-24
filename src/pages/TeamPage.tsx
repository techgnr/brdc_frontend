import TeamsSection from "../components/container/TeamsSection";
import PageLayout from "../layout/PageLayout";

const TeamPage = () => {
  return (
    <PageLayout pageTitle="Meet Our Team" page="team">
      <section className="max-w-7xl mx-auto">
        <>
          <TeamsSection title="Advisory Team" endpoint="is_adivisor=true" />
          <TeamsSection title="BOD Team" endpoint="is_bod_team=true" />
          <TeamsSection
            title="Administrative Team"
            endpoint="is_administrative=true"
          />
        </>
      </section>
    </PageLayout>
  );
};

export default TeamPage;
