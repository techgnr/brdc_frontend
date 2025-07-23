import { Link } from "react-router";
import bannerImage from "/assets/page-banner.png";
const PageBanner = ({
  pageTitle,
  page,
}: {
  pageTitle: string;
  page: string;
}) => {
  const image = bannerImage ? bannerImage : "";
  const style = {
    background: `linear-gradient(to right,rgba(0,0,0,0.2), green),url(${image} ) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "220px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className="flex" style={style}>
      <div className="max-w-7xl mx-auto">
        <div className="text-white">
          <h1 className="text-3xl font-bold text-center sm:text-4xl">
            {pageTitle}
          </h1>
          <div className="text-center mt-2 font-semibold">
            <Link to={"/"}>Home</Link> / <span className="">{page}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
