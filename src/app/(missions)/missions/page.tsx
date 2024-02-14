import MissionsSearchBar from "../_components/MissionsSearchBar/MissionsSearchBar";
import MissionsSideBar from "../_components/MissionsSideBar/MissionsSideBar";
import MissionsTable from "../_components/MissionsTable/MissionsTable";
import MissionsTabs from "../_components/MissionsTabs/MissionsTabs";

const missionsPage = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <h1>Tableau avec Checkbox</h1>
      <MissionsSideBar />

      <MissionsTable />
      <MissionsTabs />
      <MissionsSearchBar />
    </div>
  );
};

export default missionsPage;
