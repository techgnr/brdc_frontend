import PageLayout from "../layout/PageLayout";
import Carriers from "../components/container/Carriers";

const CarrierPage = () => {
  return (
    <PageLayout pageTitle="Carrier" page="carrier">
      <section className="max-w-7xl mx-auto">
        <Carriers />
      </section>
    </PageLayout>
  );
};

export default CarrierPage;
