// import { Moon, Sun } from "lucide-react";
// import { useState } from "react";

import { Link } from "react-router-dom";

function AdminHeader() {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   const toggleDarkMode = () => {
  //     const newMode = !isDarkMode;
  //     setIsDarkMode(newMode);

  //     if (newMode) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //   };
  // Get the current page title based on the path

  return (
    <header className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-700 shadow-sm">
      <div className="flex items-center space-x-3">
        <h2 className="font-semibold text-lg text-white">
          Welcome Admin
        </h2>
      </div>
      <div>
        <Link to="/">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-xl cursor-pointer">
            Home &rarr;
          </button>
        </Link>
      </div>
      {/* <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div> */}
    </header>
  );
}

export default AdminHeader;
