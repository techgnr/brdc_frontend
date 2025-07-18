import EventsSingle from "../components/container/EventsSingle";
import PageLayout from "../layout/PageLayout";

const EventsPage = () => {
  return (
    <PageLayout pageTitle="Events" page="events">
      <section className="max-w-7xl mx-auto">
        <EventsSingle />
      </section>
    </PageLayout>
  );
};

export default EventsPage;
