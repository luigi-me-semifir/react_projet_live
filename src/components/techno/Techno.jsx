import styles from "./Techno.module.scss";
import techno from "../../assets/images/react.webp";

const Techno = () => {
  return (
    <div className={styles.techno}>
      <div className={styles.imageContainer}>
        <img src={techno} alt="techno" />
      </div>
      <div
        className={`${styles.technoTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>React</h3>
      </div>
    </div>
  );
};

export default Techno;
