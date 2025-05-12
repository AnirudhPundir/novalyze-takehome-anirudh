import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import {
  PlusIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  ArrowRightOnRectangleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center justify-center">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>

        <div className="p-4">
          <Button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Recent Messages
          </h2>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <Button
                key={i}
                className="w-full flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                <ChatBubbleLeftIcon className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="truncate">Chat {i}</span>
              </Button>
            ))}
          </div>
        </div>

        <nav className="p-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/content"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <ChartBarIcon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/content"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <ChartPieIcon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span>Analytics</span>
          </Link>
          <Link
            to="/content"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <DocumentChartBarIcon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span>Reports</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            onClick={() => {
              navigate("/login");
            }}
            className="w-full flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
