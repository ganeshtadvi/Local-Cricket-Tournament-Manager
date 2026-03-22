let TeamOne = [
  { name: "Team A", captain: "Virat Kohli" },
  { name: "Team B", captain: "Rohit Sharma" },
];

const GetTeamList = () => {
  return (
    <div>
      {TeamOne.map((t) => {
        return (
          <p key={t.name}>
            {t.name} - {t.captain}
          </p>
        );
      })}
    </div>
  );
};

export default GetTeamList;
