import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { IElements } from "../../interfaces";
import Display from "../Display";
import Operations from "../Operations";
import Numbers from "../Numbers";
import Equals from "../Equals";
import { activeBlockTypes } from "../../types";
import ZoneEmpty from "../EmptyZone";

const elements: IElements = {
  display: <Display right={true} />,
  actions: <Operations right={true} />,
  numbers: <Numbers right={true} />,
  action: <Equals right={true} />,
};

const ResultContainer = (): JSX.Element => {
  const blocks = useSelector((state: RootState) => state.calc.activeBlock);

  return blocks.length ? (
    <div className={styles.result}>
      {blocks.map((item: activeBlockTypes) => elements[item])}
    </div>
  ) : (
    <ZoneEmpty />
  )
};

export default ResultContainer;
