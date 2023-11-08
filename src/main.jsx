import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Products from "./pages/Products.jsx";
import NotFound from "./pages/NotFound.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Homepage from "./pages/Homepage.jsx";
import { defer } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "products",
        element: <Products />,
        loader: () => {
          const products = fetch("https://ioayoub.fr/api/eshop").then((res) =>
            res.json()
          );

          return defer({
            products,
          });
        },
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`https://ioayoub.fr/api/eshop/${params.id}`),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
