import Header from "../components/container/Header";
import { Outlet } from "react-router";
import Footer from "../components/container/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
