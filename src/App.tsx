import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "effector-logger/inspector";

import ErrorPage from "components/uikit/ErrorPage";

import Root from "./components/pages/Root";
import TodoPage from "components/pages/TodoPage";
import NoMatch from "components/pages/NoMatch";
import TextGreeting from "components/pages/TextGreeting";

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
