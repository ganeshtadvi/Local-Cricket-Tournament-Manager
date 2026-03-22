import Button from "../Button.jsx";
import GetTeamList from "../getAllTeamLists.jsx";
import EditPlayers from "../editTeamPlayers.jsx";

const AddTeamsSection = () => {
  return (
    <div>
      <Button btnText="Add New Team" />\
      <GetTeamList />
      <EditPlayers />
    </div>
  );
};

export default AddTeamsSection;
