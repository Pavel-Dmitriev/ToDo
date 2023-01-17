import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import TodoPage from "pages/TodoPage";
import NoMatch from "pages/NoMatch";
import ErrorPage from "./pages/ErrorPage";
import TextGreeting from "pages/TextGreeting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TextGreeting />,
      },
      { path: "tasks", element: <TodoPage /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
