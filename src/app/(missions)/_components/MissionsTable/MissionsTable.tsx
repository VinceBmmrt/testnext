import React from "react";
import data from "../../../../data";
import MissionsTabs from "../MissionsTabs/MissionsTabs";

const Table = () => {
  return (
    <>
      <div className="relative mx-60">
        <h1 className="mb-5">
          Missions <sup>{data.length}</sup>
        </h1>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 hidden sm:table">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  <input type="checkbox"></input> Name
                </th>
                <th className="flex gap-1 items-center px-6 py-4 font-medium text-gray-900">
                  <span className="flex items-center">
                    State
                    <svg
                      className="w-3 h-3 ml-1 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4"
                      />
                    </svg>
                  </span>
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Role
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Team
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Candidats
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div className="text-sm">
                      <div className="font-medium text-gray-700">
                        <input type="checkbox"></input> {item.name}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {item.state}
                    {item.hasTag && (
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        Badge
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">{item.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {/* Team Data */}
                      {item.team}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {/* Candidats Data */}
                    {item.candidats && item.candidats.length > 0 && (
                      <div className="flex gap-2">
                        {item.candidats.map((candidat, index) => (
                          <div key={index} className="relative h-8 w-8">
                            <img
                              className="h-full w-full rounded-full object-cover object-center"
                              src={candidat}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
