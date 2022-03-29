import { GroupIcon } from "../../images";
import styles from "./index.module.scss";

const ZoneEmpty = (): JSX.Element => {
  return (
    <div className={styles.zone}>
      <GroupIcon />
      <h2 className={styles.zone__title}>Перетащите сюда</h2>
      <p className={styles.zone__description}>любой элемент из левой панели</p>
    </div>
  );
};

export default ZoneEmpty;
