import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const data = useRouteError();

  console.log(data);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="flex flex-col justify-center items-center h-screen">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                {data.status || "404"}
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                {data.statusText || "Something's missing."}
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we cant find that page. You will find lots to explore on
                the home page.{" "}
              </p>
              <Link
                to="/"
                className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
