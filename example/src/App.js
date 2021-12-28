import React from "react";
import { setTextRange } from "typescript";
import { useExecutionQueue } from "use-execution-queue";

import GreenIcon from "./GreenIcon";

const App = () => {
  const [text, setText] = React.useState("Test");
  const [loading, setLoading] = React.useState(false);
  const [asyncItems, setAsyncItems] = React.useState([
    "All unlimited components",
    "Own custom Tailwind styles",
    "Unlimited Templates",
    "Free premium dashboard",
    "Best ranking",
  ]);
  const { addToQueue } = useExecutionQueue();

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="shadow-2xl rounded-2xl w-64 bg-white dark:bg-gray-800 p-4">
        <p className="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
          Entreprise
        </p>
        <p className="text-gray-900 dark:text-white text-3xl font-bold">
          $0
          <span className="text-gray-300 text-sm">/ month</span>
        </p>
        <p className="text-gray-600 dark:text-gray-100  text-xs mt-4">
          For most businesses that want to optimize web queries.
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6 max-h-60 overflow-auto">
          {asyncItems.map((item, index) => (
            <li key={index} className="mb-3 flex items-center">
              <GreenIcon />
              {item}
            </li>
          ))}
        </ul>
        <div className="relative">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            id="rounded-email"
            className="mb-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your email"
          />
        </div>
        <button
          disabled={loading}
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg disabled:opacity-50"
          onClick={() => {
            setLoading(true);
            addToQueue(() => {
              setAsyncItems((previousItems) => [...previousItems, text]);
              setLoading(false);
            });
          }}
        >
          Add Using Queue
        </button>
      </div>
    </main>
  );
};
export default App;
