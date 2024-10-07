export const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Oops!</h1>
        <p className="text-2xl">Something went wrong.</p>
        <p className="text-xl">
          The page you're looking for doesn't exist or an error occurred.
        </p>
      </div>
    );
  };
