import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">oops!</h1>
            <p className="my-5 text-xl">sorry unspected error has occureds</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;