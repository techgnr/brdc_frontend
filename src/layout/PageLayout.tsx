import type React from "react";
import PageBanner from "../components/container/PageBanner";
import ReactHelmet from "../components/container/ReactHelmet";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const PageLayout = ({
  children,
  pageTitle,
  page,
}: {
  children: React.ReactNode;
  pageTitle: string;
  page: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      <ReactHelmet title={pageTitle} description={pageTitle} />
      <PageBanner pageTitle={pageTitle} page={page} />
      {children}
    </div>
  );
};

export default PageLayout;
