"use client";
import React, { useState } from "react";

const MissionsTabs = () => {
  const [activeTab, setActiveTab] = useState("toProvideMissions");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full max-w-screen-md">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "toProvideMissions"
                    ? "border-custom-color text-custom-color"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500"
                }`}
                onClick={() => handleTabClick("toProvideMissions")}
              >
                À pourvoir
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "dashboard"
                    ? "border-custom-color text-custom-color"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500"
                }`}
                onClick={() => handleTabClick("dashboard")}
              >
                En cours
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "settings"
                    ? "border-custom-color text-custom-color"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500"
                }`}
                onClick={() => handleTabClick("settings")}
              >
                À venir
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "finishedMissions"
                    ? "border-custom-color text-custom-color"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500"
                }`}
                onClick={() => handleTabClick("finishedMissions")}
              >
                Terminés
              </button>
            </li>
            <li role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "contacts"
                    ? "border-custom-color text-custom-color"
                    : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500"
                }`}
                onClick={() => handleTabClick("contacts")}
              >
                Annulé
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "toProvideMissions" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                toProvideMissions tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "dashboard" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "settings" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "finishedMissions" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                finishedMissions tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "contacts" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .border-custom-color {
          border-color: #798c73; /* Change this to your desired color */
        }
        .text-custom-color {
          color: #798c73; /* Change this to your desired color */
        }
      `}</style>
    </div>
  );
};

export default MissionsTabs;
