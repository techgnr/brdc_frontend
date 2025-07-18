import type React from "react";
import PageBanner from "../components/container/PageBanner";

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
      <PageBanner pageTitle={pageTitle} page={page} />
      {children}
    </div>
  );
};

export default PageLayout;
