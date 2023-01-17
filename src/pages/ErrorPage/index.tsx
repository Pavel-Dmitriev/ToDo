import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
