import TournamentName from "./tournamnetName.jsx";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <TournamentName />
      <div className={styles.imgDiv}>
        <img src="/images/logo.png" />
      </div>
    </div>
  );
};

export default HeroSection;
