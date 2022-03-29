import { ElementsContainer, ResultContainer } from "./components";
import { Switcher } from "./components/UI";
import styles from "./App.module.scss";
import { RootState } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./store/calcSlice";

const App = (): JSX.Element => {
  const mode = useSelector((state: RootState) => state.calc.mode);
  const dispatch = useDispatch();

  const handleChangeMode = () => {
    dispatch(changeMode());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container__switcher}>
          <Switcher position={mode} handleChange={handleChangeMode} />
        </div>
        <div className={styles.container__calculations}>
          {mode === "constructor" ? <ElementsContainer /> : null}
          <ResultContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
