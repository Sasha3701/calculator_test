import styles from "./index.module.scss";
import { SwitcherProps, IButton } from "./Switcher.props";
import { RuntimeIcon, SelectorIcon } from "../../../images";
import classNames from "classnames";

const buttons: IButton[] = [
  {
    id: 0,
    text: "Runtime",
    renderImg: (active: boolean) => (
      <RuntimeIcon
        className={classNames(styles["switcher__img"], {
          [styles["switcher__img_active"]]: active,
        })}
      />
    ),
    variant: "runtime",
  },
  {
    id: 1,
    text: "Constructor",
    renderImg: (active: boolean) => (
      <SelectorIcon
        className={classNames(styles["switcher__img"], {
          [styles["switcher__img_active"]]: active,
        })}
      />
    ),
    variant: "constructor",
  },
];

const Switcher = ({
  position,
  handleChange,
  ...props
}: SwitcherProps): JSX.Element => {
  return (
    <div className={styles.switcher} {...props}>
      {buttons.map(({ id, text, renderImg, variant }) => (
        <button
          key={id}
          onClick={handleChange}
          className={classNames(styles["switcher__button"], {
            [styles["switcher__button_active"]]: position === variant,
          })}
        >
          {renderImg(position === variant)}
          <span className={styles["switcher__text"]}>{text}</span>
        </button>
      ))}
    </div>
  );
};

export default Switcher;
