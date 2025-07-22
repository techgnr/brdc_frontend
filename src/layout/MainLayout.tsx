import Header from "../components/container/Header";
import { Outlet } from "react-router";
import Footer from "../components/container/Footer";
import ScrollToTop from "../components/ScrollToTop";
import GoTop from "../components/GoTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <GoTop />
    </>
  );
};

export default MainLayout;
