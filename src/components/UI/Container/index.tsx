import { DragEvent } from "react";
import { ContainerProps } from "./Container.props";
import styles from "./index.module.scss";
import classNames from "classnames";

const Container = ({
  children,
  inside,
  right = false,
  runtime = false,
  useble = false,
  ...props
}: ContainerProps): JSX.Element => {
  const handleDragStart = (e: DragEvent<HTMLDivElement>, inside: string) => {};

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {};

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {};

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>, inside: string) => {
    e.preventDefault();
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.container_right]: right,
        [styles.container_useble]: useble,
      })}
      onDragStart={(e) => handleDragStart(e, inside)}
      onDragLeave={handleDragLeave}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrag={(e) => handleDrag(e, inside)}
      draggable={true}
      data-type={inside}
      {...props}
    >
      {!runtime ? <div className={styles.container__block}></div> : null}
      {children}
    </div>
  );
};

export default Container;
