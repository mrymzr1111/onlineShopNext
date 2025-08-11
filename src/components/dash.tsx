
"use client"
import { ReactNode, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTachometer, faUser, faEnvelope, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-700 w-full md:w-64 h-20 md:h-full overflow-y-auto flex md:flex-col justify-between md:justify-start
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? "block" : "hidden"} md:block
        `}
      >
        <header className="flex justify-between items-center  border-gray-400 p-4 md:p-6 md:flex-col">
          <div id="logo" className="mb-0 md:mb-8">
            <Link href="/" className="text-white text-xl md:text-2xl font-bold">
              Dashboard
            </Link>
          </div>
          <button
            id="collapse"
            aria-label="Toggle sidebar"
            aria-expanded={sidebarOpen}
            aria-controls="sidebar-menu"
            className="text-white border border-white p-2 rounded md:hidden"
            type="button"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </header>

        <div
          id="profile"
          className="text-white p-4 md:p-6 border-t md:border-t-0 md:border-b border-gray-800 flex items-center md:flex-col gap-4"
        >
          
        </div>

        <nav id="sidebar-menu" className="flex md:flex-col">
          <ul className="list-none p-0 m-0 flex flex-row md:flex-col w-full">
            <li className="flex-1 md:flex-none">
              <Link
                href="/admin/mainpanel" 
                className="flex items-center justify-center md:justify-start gap-2 p-4 text-white hover:bg-gray-500 w-full"
                onClick={() => setSidebarOpen(false)}
              >
                <FontAwesomeIcon icon={faTachometer} />{" "}
                <span className="hidden md:inline">Dashboard</span>
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link
                href="/account"
                className="flex items-center justify-center md:justify-start gap-2 p-4 text-white hover:bg-gray-500 w-full"
                onClick={() => setSidebarOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} />{" "}
                <span className="hidden md:inline">Account</span>
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link
                href="/mailbox"
                className="flex items-center justify-center md:justify-start gap-2 p-4 text-white hover:bg-gray-500 w-full"
                onClick={() => setSidebarOpen(false)}
              >
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <span className="hidden md:inline">Mailbox</span>
              </Link>
            </li>
            <li className="flex-1 md:flex-none">
              <Link
                href="/"
                className="flex items-center justify-center md:justify-start gap-2 p-4 text-white hover:bg-gray-500 w-full"
                onClick={() => setSidebarOpen(false)}
              >
                <FontAwesomeIcon icon={faBoxOpen} />{" "}
                <span className="hidden md:inline">Products</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <main id="content" className="flex-grow p-6 bg-transparent overflow-auto min-h-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
