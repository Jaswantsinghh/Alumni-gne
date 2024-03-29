import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font relative bottom-0">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 md:text-xl">Genco 1969-73 Golden Jubilee</span>
        </a>
        <p className=" text-center text-xs md:text-sm  text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} All Rights Reserved —
          <a
            href="https://gndec.ac.in"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Website by - Department of Computer Science and Engineering, GNDEC
            Ludhiana
          </a>
        </p>
      </div>
    </footer>
  );
};
