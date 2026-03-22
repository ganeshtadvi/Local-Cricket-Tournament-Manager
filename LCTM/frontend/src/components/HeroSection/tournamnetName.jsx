const TournamentName = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: "15px 20px",
        width: "50%",
        backgroundColor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        marginBottom: "12px",
      }}
    >
      <div>
        <h3 style={{ margin: "0", color: "#1f2d3d" }}>
          Village Premier League
        </h3>

        <p style={{ margin: "5px 0 0 0", color: "#6b7280", fontSize: "14px" }}>
          Pune, Start Date: Apr 04 2026
        </p>
      </div>

      <button
        style={{
          backgroundColor: "#1e73be",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default TournamentName;
