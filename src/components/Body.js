import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import MovieDetail from "./MovieDetail";
import CastDetail from "./castDetail";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "detail/:movieId",
      element: (
        <>
          <MovieDetail />
        </>
      ),
    },
    {
      path: "cast/:personId",
      element: <CastDetail />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default Body;
