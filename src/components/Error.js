import { useRouteError } from "react-router-dom";
export default ErrorPage = () => {
  const { status, error } = useRouteError();
  return (
    <div>
      <h1>OOps... Something went wrong</h1>
      <h2>INFO:</h2>
      <h3>
        code: {status}
        <br />
        Message: {error?.message}
      </h3>
    </div>
  );
};
