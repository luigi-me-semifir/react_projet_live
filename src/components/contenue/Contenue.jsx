import Techno from "../techno/Techno";
import styles from "./Contenue.module.scss";

const Contenue = () => {
  return (
    <section className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos différentes formations</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          <Techno />
          <Techno />
          <Techno />
          <Techno />
          <Techno />
          <Techno />
          <Techno />
          <Techno />
        </div>
      </div>
    </section>
  );
};

export default Contenue;
