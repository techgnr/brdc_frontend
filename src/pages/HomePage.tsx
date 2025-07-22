import Banner from "../components/container/Banner";
import EventsSingle from "../components/container/EventsSingle";
import HomeAbout from "../components/container/HomeAbout";
import HorizontalSlider from "../components/container/HorizontalSlider";
import Milestones from "../components/container/Milestones";
import Programs from "../components/container/Programs";
import SectionWrapper from "../components/container/SectionWrapper";
import StoriesSingle from "../components/container/StoriesSingle";
import TeamsSection from "../components/container/TeamsSection";
import ThematicArea from "../components/container/ThematicArea";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Banner />
        <HomeAbout />
        <ThematicArea />
        <Milestones />
        <SectionWrapper background="bg-white">
          <EventsSingle isHome />
          <StoriesSingle isHome />
        </SectionWrapper>
        <Programs isHome />
        <TeamsSection endpoint="is_bod_team=true" title="BOD Team" isHome />
        <HorizontalSlider />
      </main>
    </div>
  );
};

export default HomePage;
