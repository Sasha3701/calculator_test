import { ButtonProps } from "./Button.props";
import styles from "./index.module.scss";
import classNames from "classnames";

const Button = ({
  children,
  size = "medium",
  variant = "white",
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[`button_${size}`],
        styles[`button_${variant}`]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
