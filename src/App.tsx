import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "effector-logger/inspector";

import ErrorPage from "components/uikit/ErrorPage";

import Root from "./components/pages/Root";
import TodoPage from "components/pages/TodoPage";
import ReminderPage from "components/pages/ReminderPage";
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
      { path: "reminder", element: <ReminderPage /> },
      { path: "*", element: <NoMatch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
