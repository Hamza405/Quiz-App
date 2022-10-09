import { FC, useState } from "react";
import {
  Difficulty,
  QuestionState,
  AnswerObject,
  TOTAL_QUESTIONS,
} from "../services/utils";

const DifficultySelector: FC = () => {
  const [difShow, setDifShow] = useState(true);
  return (
    <div className="flex flex-col">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="w-32 md:w-44 text-white border border-grey-800 bg-cyan-800 hover:bg-cyan-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-around"
        type="button"
        onClick={() => setDifShow(!difShow)}
      >
        Difficulty
        <svg
          className="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          difShow && "hidden"
        } mt-2 z-10 w-32 md:w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 animate-Entering`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {Object.keys(Difficulty).map((key) => (
            <li key={key}>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {key}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DifficultySelector;
