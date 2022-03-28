import { ElementsContainer, ResultContainer } from "./components";
import { Switcher } from "./components/UI";
import styles from "./App.module.scss";

const App = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__switcher}>
          <Switcher position="constructor" handleChange={() => {}} />
        </div>
        <div className={styles.container__calculations}>
          <ElementsContainer />
          <ResultContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
