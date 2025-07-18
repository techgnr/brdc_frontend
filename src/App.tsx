import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/App.css";
import MainLayout from "./layout/MainLayout";
import PageNotFoundLayout from "./layout/PageNotFoundLayout";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import EventsPage from "./pages/EventsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/events",
          element: <EventsPage />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFoundLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
