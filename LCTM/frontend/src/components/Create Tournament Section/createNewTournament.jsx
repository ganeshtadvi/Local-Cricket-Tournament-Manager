import InputSection from "../Input.jsx";
import styles from "./createNewTournament.module.css";
import Button from "../Button.jsx";
const CreateNewTournament = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.newTournamentDiv}>
      <form action={handleSubmit} method="post">
        <InputSection type="text" label="Tournament Name" />
        <InputSection type="list" label="Location" />
        <InputSection type="date" label="Start Date" />
        <InputSection type="number" label="Number of Teams" />
        <InputSection type="number" label="Overs per Match" />
        <InputSection type="number" label="Price Details" />
        <Button type="submit" btnText="Create Tournament" />
      </form>
    </div>
  );
};

export default CreateNewTournament;
