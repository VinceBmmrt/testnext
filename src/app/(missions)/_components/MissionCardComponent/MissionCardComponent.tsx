// MissionCardComponent.js
import React from "react";

const MissionCardComponent = ({ mission }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded border border-gray-300 overflow-hidden shadow-md p-4 my-4 h-full w-full">
      {/* Top Left: Métier and Date */}
      <div className="mb-4 flex justify-between items-start">
        <div>
          <p className="font-bold text-gray-700">Métier</p>
          <p className="text-gray-500">
            <svg
              className="w-4 h-4 text-gray-300" // Adjusted size and color
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
              />
            </svg>
            Date
            {mission.hasTag && (
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
                Badge
              </span>
            )}
          </p>
        </div>

        {/* Top Right: Amount and Hours */}
        <div className="text-right">
          <p className="font-bold text-gray-700">00.00 €</p>
          <p className="text-gray-500">Horaires</p>
        </div>
      </div>

      {/* Bottom Mid: Avatar Images */}
      <div className="flex items-center justify-center mt-4">
        {mission.candidats.length
          ? mission.candidats.map(
              (candidat: { avatarUrl: string | undefined }, index: number) => (
                <div key={index} className="flex items-center h-8 w-8">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={candidat as any}
                    alt={`Avatar ${index + 1}`}
                  />
                </div>
              )
            )
          : null}
      </div>
      {mission.candidats.length ? (
        <p className="text-center text-blue-500 mt-4">
          Voir les {mission.candidats.length} candidatures
        </p>
      ) : (
        <p className="text-center font-medium text-black-500 mt-4 ">
          Aucun candidat n'a postulé pour le moment
        </p>
      )}
    </div>
  );
};

export default MissionCardComponent;
