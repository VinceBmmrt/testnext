import React from 'react';
import data from "../../../../data"

const Table = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              State
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
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {data.map((item) => (
            <tr key={item.name} className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
             
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{item.name}</div>
                  <div className="text-gray-400"><input type='checkbox'></input></div>
                </div>
              </th>
              <td className="px-6 py-4">
              {item.state}
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
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                      </div>
                    ))}
                  </div>
                )}
              </td>
              <td className="px-6 py-4">
                {/* Ajoutez ici le contenu de la dernière colonne si nécessaire */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;