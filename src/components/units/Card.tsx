import React from "react";
type Props = {
  title?: string;
  description?: string;
  cta?: string;
};
export const Card = ({ title, description, cta }: Props) => {
  return (
    <div className="w-full px-4 text-center md:w-4/12">
      <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <div className="flex-auto px-4 py-4">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg">
            <i className="fas fa-fingerprint"></i>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title || "Card"}
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque urna ex, eu cursus lectus."}
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {cta || "Read more"}
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
