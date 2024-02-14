import MissionsSearchBar from "../_components/MissionsSearchBar/MissionsSearchBar";
import MissionsSideBar from "../_components/MissionsSideBar/MissionsSideBar";
import MissionsTable from "../_components/MissionsTable/MissionsTable";
import MissionsTabs from "../_components/MissionsTabs/MissionsTabs";

const missionsPage = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <MissionsSideBar />

      <MissionsTable />
      <MissionsTabs />
      <MissionsSearchBar />
    </div>
  );
};

export default missionsPage;
