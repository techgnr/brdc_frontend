import { createBrowserRouter, RouterProvider } from "react-router";
import "./styles/App.css";
import MainLayout from "./layout/MainLayout";
import PageNotFoundLayout from "./layout/PageNotFoundLayout";
import HomePage from "./pages/HomePage";

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
