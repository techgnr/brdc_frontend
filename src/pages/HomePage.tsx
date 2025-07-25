import Banner from "../components/container/Banner";
import BlogsSingle from "../components/container/BlogsSingle";
import EventsSingle from "../components/container/EventsSingle";
import HomeAbout from "../components/container/HomeAbout";
import HorizontalSlider from "../components/container/HorizontalSlider";
import Milestones from "../components/container/Milestones";
import ReactHelmet from "../components/container/ReactHelmet";
import SectionWrapper from "../components/container/SectionWrapper";
import StoriesSingle from "../components/container/StoriesSingle";
import TeamsSection from "../components/container/TeamsSection";
import ThematicArea from "../components/container/ThematicArea";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <ReactHelmet title="Home-BRDC" description="Home" />
      <main>
        <Banner />
        <HomeAbout />
        <ThematicArea />
        <Milestones />
        <SectionWrapper background="bg-white">
          <EventsSingle isHome />
          <StoriesSingle isHome />
        </SectionWrapper>
        <BlogsSingle isHome />
        <TeamsSection endpoint="is_bod_team=true" title="BOD Team" isHome />
        <HorizontalSlider />
      </main>
    </div>
  );
};

export default HomePage;
