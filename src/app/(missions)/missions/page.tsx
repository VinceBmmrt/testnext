import data from "@/data";
import MissionCardComponent from "../_components/MissionCardComponent/MissionCardComponent";
import MissionDateButton from "../_components/MissionDateButton/MissionDateButton";
import MissionsSearchBar from "../_components/MissionsSearchBar/MissionsSearchBar";
import MissionsSideBar from "../_components/MissionsSideBar/MissionsSideBar";
import MissionsTable from "../_components/MissionsTable/MissionsTable";
import MissionsTabs from "../_components/MissionsTabs/MissionsTabs";

const missionsPage = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      <MissionsSideBar />
      <MissionsTable />
      <MissionsTabs />
      <div className="flex justify-center w-full">
        <MissionsSearchBar />
        <MissionDateButton />
      </div>
      <div className="flex flex-col w-full block sm:hidden">
        {data.map((mission, index) => (
          <MissionCardComponent key={index} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default missionsPage;
