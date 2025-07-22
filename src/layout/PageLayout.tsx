import type React from "react";
import PageBanner from "../components/container/PageBanner";
import ReactHelmet from "../components/container/ReactHelmet";

const PageLayout = ({
  children,
  pageTitle,
  page,
}: {
  children: React.ReactNode;
  pageTitle: string;
  page: string;
}) => {
  return (
    <div>
      <ReactHelmet title={pageTitle} description={pageTitle} />
      <PageBanner pageTitle={pageTitle} page={page} />
      {children}
    </div>
  );
};

export default PageLayout;
