import { useState } from "react";
import styles from "./Techno.module.scss";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Techno = ({ nom, image }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.techno}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`Le logo de la techno, ${nom}`} />
      </div>
      <div
        className={`${styles.technoTitle} d-flex flex-row justify-content-around align-items-center`}
      >
        <h3>{nom}</h3>
        <i onClick={handleClick}>{liked ? <FaHeart /> : <FaRegHeart />}</i>
      </div>
    </div>
  );
};

export default Techno;
