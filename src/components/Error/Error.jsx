import React from "react";
import {
  Link,
  useNavigate,
  useRouteError,
  isRouteErrorResponse,
} from "react-router";

const ErrorPage = ({ notFound = false }) => {
  const navigate = useNavigate();
  const routeError = useRouteError();

  let statusCode = 404;
  let headline = "Page not found";
  let description = "The page you’re looking for doesn’t exist or was moved.";

  if (!notFound && routeError) {
    if (isRouteErrorResponse && isRouteErrorResponse(routeError)) {
      statusCode = routeError.status || 500;
      headline = routeError.statusText || "Something went wrong";
      description = routeError.data?.message || description;
    } else {
      statusCode = routeError.status || 500;
      headline = routeError.message || "Unexpected error";
      description = "An unexpected error occurred. Please try again.";
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center py-10">
      <div className="max-w-3xl mx-auto px-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <div className="mb-4">
              <span className="badge badge-primary badge-lg">Error</span>
            </div>
            <h1 className="text-6xl font-extrabold text-primary mb-2">
              {statusCode}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">{headline}</h2>
            <p className="text-base-content/70 mb-6">{description}</p>

            <div className="divider" />

            <div className="card-actions justify-center gap-3">
              <button className="btn btn-outline" onClick={() => navigate(-1)}>
                Go Back
              </button>
              <button className="btn" onClick={() => navigate(0)}>
                Retry
              </button>
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-base-content/60">
          If this keeps happening, please contact support.
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
