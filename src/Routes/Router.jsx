import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ErrorPage from "../components/Error";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "",
            element: <Home></Home>
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch("/news.json"),
        },
    ]
  },
//   {
//     path: "/auth",
//     element: <h2>Authentication Layout</h2>,
//   },
//   {
//     path: "/news",
//     element: <h2>News Layout</h2>,
//   },
// //   {
// //     path: "/*",
// //     element: <ErrorPage></ErrorPage>,
// //   },
]);

export default router;
