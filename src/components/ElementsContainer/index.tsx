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
  display: (key) => <Display key={key} right={false} />,
  actions: (key) => <Operations key={key} right={false} />,
  numbers: (key) => <Numbers key={key} right={false} />,
  action: (key) => <Equals key={key} right={false} />,
};

const ElementsContainer = (): JSX.Element => {
  return (
    <div className={styles.elements}>
      {elementList.map((item: activeBlockTypes, i: number) => elements[item](i))}
    </div>
  );
};

export default ElementsContainer;
