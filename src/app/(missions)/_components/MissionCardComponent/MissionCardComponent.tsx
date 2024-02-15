// MissionCardComponent.js
import React from "react";

const MissionCardComponent = ({ mission }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded border border-gray-300 overflow-hidden shadow-md p-4 my-4 h-full w-full">
      {/* Top Left: Métier and Date */}
      <div className="mb-4 flex justify-between items-start">
        <div>
          <p className="font-bold text-gray-700">Métier</p>
          <p className="text-gray-500">Date</p>
        </div>

        {/* Top Right: Amount and Hours */}
        <div className="text-right">
          <p className="text-gray-700">00.00 €</p>
          <p className="text-gray-500">Horaires</p>
        </div>
      </div>

      {/* Bottom Mid: Avatar Images and "Voir les 5 candidatures" */}
      <div className="flex items-center justify-center mt-4">
        {mission.candidats.map(
          (candidat: { avatarUrl: string | undefined }, index: number) => (
            <div key={index} className="flex items-center h-8 w-8">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src={candidat as any}
                alt={`Avatar ${index + 1}`}
              />
            </div>
          )
        )}
      </div>

      {/* Bottom Left: "Voir les 5 candidatures" */}
      <p className="text-center text-blue-500 mt-4">
        Voir les {mission.candidats.length} candidatures
      </p>
    </div>
  );
};

export default MissionCardComponent;
