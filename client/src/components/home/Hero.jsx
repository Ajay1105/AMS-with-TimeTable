import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
const Hero = () => {
  return (
    <section id="home" className="tw-bg-white dark:tw-bg-gray-900">
      <div className="tw-py-8 tw-px-4 tw-mx-auto tw-max-w-screen-xl tw-text-center lg:tw-py-14 lg:tw-px-12">
        <Link
          to="/login"
          className="tw-inline-flex tw-justify-between tw-items-center tw-py-1 tw-px-1 tw-pr-4 tw-mb-7 tw-text-sm tw-text-gray-700 tw-bg-gray-100 tw-rounded-full dark:tw-bg-gray-800 dark:tw-text-white hover:tw-bg-gray-200 dark:hover:tw-bg-gray-700"
          role="alert"
        >
          <span className="tw-text-xs tw-bg-cyan-500 tw-font-bold tw-uppercase tw-rounded-full tw-text-white tw-px-4 tw-py-1.5 tw-mr-3">
            New
          </span>{" "}
          <span className="tw-text-sm tw-font-medium">Timetable module!</span>
          <ChevronRightIcon
            strokeWidth={2.5}
            className="tw-size-4 tw-text-white"
          />
        </Link>
        <h1 className="tw-mb-5 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none tw-text-gray-900 md:tw-text-5xl lg:tw-text-6xl dark:tw-text-white">
          Welcome to XCEED
        </h1>
        <h3 className="tw-mb-5 tw-text-4xl tw-font-extrabold tw-tracking-tight tw-leading-none text-cyan-600 md:tw-text-3xl lg:tw-text-4xl dark:tw-text-cyan-300">
          eXplore, Code, Enrich, Evolve &amp; Develop
        </h3>
        <p className="tw-mb-8 tw-text-lg tw-font-normal tw-text-gray-500 lg:tw-text-xl sm:tw-px-16 xl:tw-px-48 dark:tw-text-gray-400">
          Here at At Xceed we are not just a club; we are a hub of innovation,
          collaboration, and excellence. From developing official college
          projects to pioneering initiatives that redefine the digital
          landscape, Xceed stands as a testament to the prowess of our student
          community.
        </p>
        <div className="tw-flex tw-flex-col tw-mb-8 lg:tw-mb-16 tw-space-y-4 sm:tw-flex-row sm:tw-justify-center sm:tw-space-y-0 sm:tw-space-x-4">
          <a
            href="#services"
            className="tw-inline-flex tw-justify-center tw-items-center tw-py-3 tw-px-5 tw-text-base tw-font-medium tw-text-center tw-text-white tw-rounded-lg tw-bg-cyan-600 hover:tw-bg-cyan-700 focus:tw-ring-4 focus:tw-ring-cyan-300 dark:focus:tw-ring-cyan-950"
          >
            Our Services
            <svg
              className="tw-ml-2 tw--mr-1 tw-w-5 tw-h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <Link
            to="/login"
            className="tw-inline-flex tw-justify-center tw-items-center tw-py-3 tw-px-5 tw-text-base tw-font-medium tw-text-center tw-text-gray-900 tw-rounded-lg tw-border tw-border-gray-300 hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-100 dark:tw-text-white dark:tw-border-gray-700 dark:hover:tw-bg-gray-700 dark:focus:tw-ring-gray-800"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
