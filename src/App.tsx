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
import PageDetailsLayout from "./layout/PageDetailsLayout";
import CarrierPage from "./pages/CarrierPage";
import NewsNoticePage from "./pages/NewsNoticePage";

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
          path: "/blogs/:id",
          element: <PageDetailsLayout url="blogs" />,
        },
        {
          path: "/events",
          element: <EventsPage />,
        },
        {
          path: "/events/:id",
          element: <PageDetailsLayout url="events" />,
        },
        {
          path: "/stories",
          element: <StoriesPage />,
        },
        {
          path: "/stories/:id",
          element: <PageDetailsLayout url="sucessstories" />,
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
          path: "/gallery/:slug",
          element: <GalleryPage />,
        },
        {
          path: "/gallery/:slug/:id",
          element: <GalleryPage />,
        },
        {
          path: "/publication-document",
          element: <PublicationDocumentsPage />,
        },
        {
          path: "/who-we-are/:slug",
          element: <PageDetailsLayout url="aboutsection" />,
        },
        {
          path: "/what-we-do/:slug",
          element: <PageDetailsLayout url="aboutsection" />,
        },
        {
          path: "/carriers",
          element: <CarrierPage />,
        },
        {
          path: "/carriers/:id",
          element: <PageDetailsLayout url="carrier" />,
        },
        {
          path: "/notice",
          element: <NewsNoticePage />,
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
