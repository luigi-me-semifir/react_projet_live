import styles from "./Header.module.scss";
import reactLogo from "../../assets/images/react_logo.webp";

const Header = () => {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={reactLogo} alt="logo react" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
};

export default Header;
