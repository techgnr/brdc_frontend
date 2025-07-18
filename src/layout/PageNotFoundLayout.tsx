import { Link } from "react-router";

const PageNotFoundLayout = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mb-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">404</p>
      <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">
        Page Not Found.
      </h1>
      <Link
        to="/"
        className="mt-3 border-2 border-gray-200 px-3 py-1 transition-all duration-200 hover:border-primary hover:text-primary"
      >
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFoundLayout;
