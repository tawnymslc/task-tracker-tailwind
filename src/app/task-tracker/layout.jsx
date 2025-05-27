'use client';

import { useEffect, useState } from 'react';

export default function TaskLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 dark:text-white shadow-md hidden md:block">
        <div className="p-6 text-lg font-bold text-black dark:text-white border-b border-gray-200 dark:border-gray-700">Task Tracker</div>
        <nav className="flex flex-col p-4 gap-3">
          <a href="/task-tracker" className="hover:text-blue-600 dark:hover:text-blue-400">All Tasks</a>
          <a href="/task-tracker/completed" className="hover:text-blue-600 dark:hover:text-blue-400">Completed</a>
          <a href="/task-tracker/profile" className="hover:text-blue-600 dark:hover:text-blue-400">Profile</a>
        </nav>
      </aside>

      {/* Main content wrapper */}
      <div className="relative flex-1 bg-gray-100 dark:bg-gray-800 dark:text-white">
        {/* Top right dark mode toggle */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-sm border rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <main className="p-6 pt-16">{children}</main>
      </div>
    </div>
  );
}
