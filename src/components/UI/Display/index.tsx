import styles from "./index.module.scss";
import { DisplayProps } from "./Display.props";
import classNames from "classnames";

const Display = ({ value, ...props }: DisplayProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.display, {
        [styles.display_null]: value === "0",
      })}
      {...props}
    >
      {value}
    </div>
  );
};

export default Display;
