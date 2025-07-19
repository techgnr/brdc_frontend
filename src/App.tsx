import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/App.css";
import MainLayout from "./layout/MainLayout";
import PageNotFoundLayout from "./layout/PageNotFoundLayout";
import HomePage from "./pages/HomePage";
import BlogsPage from "./pages/BlogsPage";
import EventsPage from "./pages/EventsPage";
import StoriesPage from "./pages/StoriesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import PublicationDocumentsPage from "./pages/PublicationDocumentsPage";

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
        {
          path: "/stories",
          element: <StoriesPage />,
        },
        {
          path: "/team",
          element: <TeamPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/gallery",
          element: <GalleryPage />,
        },
        {
          path: "/publication-document",
          element: <PublicationDocumentsPage />,
        },

        {
          path: "*",
          element: <PageNotFoundLayout />,
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
