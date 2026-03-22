import Header from "./Header";
import InputSection from "./Input";
const EditPlayers = () => {
  return (
    <div>
      
      <InputSection label="Player Name: " type="text" />
      <label>Role</label>
      <select>
        <option>Select</option>
        <option>Batsman</option>
        <option>Bowler</option>
        <option>All Rounder</option>
      </select>
      <Header heading="Player List" />
    </div>
  );
};

export default EditPlayers;
