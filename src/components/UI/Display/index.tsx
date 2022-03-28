import styles from "./index.module.scss";
import { DisplayProps } from "./Display.props";

const Display = ({ value, ...props }: DisplayProps): JSX.Element => {
  return (
    <div className={styles.display} {...props}>
      {value}
    </div>
  );
};

export default Display;
