import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import Contact from "../views/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
const MainRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default MainRoutes;
