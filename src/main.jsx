import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
// Removed Portfolio and Users
import Blog from "./components/Blogs/Blog.jsx";
import SinglePost from "./components/SinglePost/SinglePost.jsx";
import ErrorPage from "./components/Error/Error.jsx";

const blogsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      // Portfolio and Users routes removed
      {
        path: "blogs",
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Blog blogsPromise={blogsPromise}></Blog>
          </Suspense>
        ),
      },
      {
        path: "blogs/:blogId",
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
          ).then((res) => res.json()),
        Component: SinglePost,
      },
      { path: "*", element: <ErrorPage notFound={true} /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      router={router}
      HydrateFallback={<div>Loading...</div>}
    ></RouterProvider>
  </StrictMode>
);
