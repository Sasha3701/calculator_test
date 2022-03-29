import { IElements } from "../../interfaces";
import { activeBlockTypes } from "../../types";
import Display from "../Display";
import Equals from "../Equals";
import Numbers from "../Numbers";
import Operations from "../Operations";
import styles from "./index.module.scss";

const elementList: activeBlockTypes[] = [
  "display",
  "actions",
  "numbers",
  "action",
];

const elements: IElements = {
  display: <Display right={false}/>,
  actions: <Operations right={false}/>,
  numbers: <Numbers right={false}/>,
  action: <Equals right={false}/>,
};

const ElementsContainer = (): JSX.Element => {
  return (
    <div className={styles.elements}>
      {elementList.map((item: activeBlockTypes) => elements[item])}
    </div>
  );
};

export default ElementsContainer;
