"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const renderedMenu = useMemo(() => {
    return menuData.map((menuItem, idx) => (
      <li key={idx} className="relative group">
        {menuItem.submenu ? (
          <>
            <button
              onClick={() => setDropdownToggler(!dropdownToggler)}
              className="flex items-center gap-2 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {menuItem.title}
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            <ul
              className={`absolute left-0 top-full mt-2 w-48 bg-gray-100 dark:bg-gray-700 shadow-md rounded-md py-2 z-20 ${
                dropdownToggler ? "block" : "hidden group-hover:block"
              }`}
            >
              {menuItem.submenu.map((subItem, subIdx) => (
                <li key={subIdx}>
                  <Link
                    href={subItem.path || "#"}
                    prefetch={false}
                    className="block px-4 py-2 text-sm text-gray-900 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                  >
                    {subItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <Link
            href={menuItem.path || "#"}
            prefetch={false}
            className={`px-3 py-2 text-base font-semibold transition duration-200 border-b-2 border-transparent
              ${
                pathUrl === menuItem.path
                  ? "text-gray-900 dark:text-gray-100 border-gray-900 dark:border-gray-100"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400"
              }`}
          >
            {menuItem.title}
          </Link>
        )}
      </li>
    ));
  }, [menuData, dropdownToggler, pathUrl]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 border-b ${
        stickyMenu
          ? "bg-gray-100 shadow-md dark:bg-gray-900 border-gray-200 dark:border-gray-700"
          : "bg-gray-50 dark:bg-gray-800 border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold flex items-center gap-1 drop-shadow-sm"
        >
          <span className="text-blue-600 dark:text-blue-500">Saket</span>
          <span className="text-gray-900 dark:text-gray-100">Singh</span>
        </Link>

        {/* Right side (Hamburger & Menu) */}
        <div className="flex items-center gap-4 ml-auto pr-2 xl:pr-0">
          {/* Hamburger Icon */}
          <button
            aria-label="Toggle Navigation"
            className="xl:hidden flex flex-col justify-between w-6 h-5 z-50"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span
              className={`h-0.5 w-full bg-gray-700 dark:bg-white transition-all duration-300 ${
                navigationOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-gray-700 dark:bg-white transition-all duration-300 ${
                navigationOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-gray-700 dark:bg-white transition-all duration-300 ${
                navigationOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          {/* Navigation Menu */}
          <nav
            className={`${
              navigationOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-gray-50 dark:bg-gray-800 text-center rounded-b-md shadow-lg xl:static xl:block xl:bg-transparent xl:shadow-none xl:rounded-none`}
          >
            <ul className="flex flex-col xl:flex-row xl:gap-0 py-4 xl:py-0">
              {renderedMenu}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
