import { useState } from "react";
import Techno from "../techno/Techno";
import styles from "./Contenue.module.scss";
import { useEffect } from "react";
import TechnosService from "../../services/technosService";

const Contenue = () => {
  const [technos, setTechnos] = useState([]);

  useEffect(() => {
    TechnosService.getTechnos().then((techno) => setTechnos(techno));
  }, []);
  console.log(technos);

  console.log("sans useEffect", technos);

  return (
    <section className="flex-fill container p-20">
      <h1 className="my-30">Découvrez nos différentes formations</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {technos.map((techno) => (
            <Techno key={techno.id} {...techno} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contenue;
