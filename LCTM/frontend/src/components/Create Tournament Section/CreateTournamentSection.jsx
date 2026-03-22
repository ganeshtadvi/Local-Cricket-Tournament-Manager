import CreateNewTournament from "./createNewTournament.jsx";
import AddTeamsSection from "./addTeams.jsx";
import styles from "./createtournament.module.css";
const CreateTournamentSection = () => {
  return (
    <div className={styles.createTournamentSection}>
      <CreateNewTournament />
      <AddTeamsSection />
    </div>
  );
};
export default CreateTournamentSection;
