import styles from "./App.module.scss";
import { Header, Footer, Contenue } from "./components";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Contenue />
      <Footer />
    </div>
  );
};

export default App;
