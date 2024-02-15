"use client";
import { useState } from "react";
import CrossCloseSvg from "../../../../../public/menu-cross-icon.svg";

const MissionsSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      {isSidebarOpen ? null : (
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className={`inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg xl2:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
            isSidebarOpen ? "absolute top-0 right-0" : "absolute top-0 right-0"
          }`}
          onClick={handleClick}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      )}

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl2:translate-x-0 border-r border-gray-300 dark:border-gray-600`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hidden xl2:flex"
              >
                <div
                  style={{ backgroundColor: "#798c73" }}
                  className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full dark:bg-gray-600"
                >
                  <span className="font-medium text-white dark:text">C</span>
                </div>
                <span className="ms-3 py-14">Ciel Bleu</span>
              </a>
              <span className="ms-3 py-14">
                {/* Close icon */}
                <div className="flex items-center justify-between p-2 xl2:hidden">
                  <div>
                    <span className="text-gray-900 font-bold">MENU</span>
                  </div>

                  <button onClick={handleClick}>
                    <svg
                      fill="#918888"
                      height="10px"
                      width="10px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 512 512"
                      xmlSpace="preserve"
                      stroke="#918888"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </span>
              <hr className=" py-4 border-t border-gray-300 dark:border-gray-600" />
              <span>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#798c73",
                  }}
                  className={`text-white bg-green-800 hover:bg-green-900 ${
                    isSidebarOpen ? "bg-green-700" : ""
                  } active:opacity-80 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-0 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900 transition-all duration-200`}
                >
                  + Nouvelle Mission
                </button>
              </span>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Tableau de bord
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Planning</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Missions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Factures</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mt-40"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Paramètres
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Déconnexion
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MissionsSideBar;
