// MissionCardComponent.js
import React from "react";

const MissionCardComponent = ({ mission }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded border border-gray-300 overflow-hidden shadow-md p-4 my-4 h-full w-full">
      {/* Top Left: Métier and Date */}
      <div className="mb-4">
        <p className="font-bold text-gray-700">Métier</p>
        <p className="text-gray-500">Date</p>
      </div>

      {/* Top Right: Amount and Hours */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700">00.00 €</p>
          <p className="text-gray-500">Horaires</p>
        </div>
      </div>

      {/* Bottom Mid: Avatar Images and "Voir les 5 candidatures" */}
      <div className="flex items-center justify-center mt-4">
        {mission.candidats.map((candidat, index) => (
          <div key={index} className="flex items-center">
            <img
              className="rounded-full h-16 w-16 mr-2" // Adjusted size for avatar images
              src={candidat.avatarUrl}
              alt={`Avatar ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <p className="text-center text-blue-500 mt-4">
        Voir les {mission.candidats.length} candidatures
      </p>
    </div>
  );
};

export default MissionCardComponent;
