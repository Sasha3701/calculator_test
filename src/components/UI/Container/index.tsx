import { DragEvent, useState } from "react";
import { ContainerProps } from "./Container.props";
import styles from "./index.module.scss";
import classNames from "classnames";
import {
  saveCurrentBlock,
  savePosBlock,
  removeBlock,
} from "../../../store/calcSlice";
import { useDispatch } from "react-redux";
import { activeBlockTypes } from "../../../types";
import { BorderIcon } from "../../../images";

const Container = ({
  children,
  inside,
  right = false,
  runtime = false,
  useble = false,
  ...props
}: ContainerProps): JSX.Element => {
  const [viewBorder, setViewBorder] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDragStart = (e: DragEvent<HTMLDivElement>, inside: string) => {
    dispatch(saveCurrentBlock(inside as activeBlockTypes));
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    setViewBorder(false);
    dispatch(savePosBlock(null));
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, inside: string) => {
    e.preventDefault();
    setViewBorder(true);
    dispatch(savePosBlock(inside as activeBlockTypes));
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    setViewBorder(false);
  };

  const handleDoubleClick = (inside: string) => {
    dispatch(removeBlock(inside as activeBlockTypes));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.container_right]: right,
        [styles.container_useble]: useble,
        [styles.container_draggable]: !runtime && !useble,
      })}
      onDragStart={(e) => handleDragStart(e, inside)}
      onDragLeave={handleDragEnd}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => handleDragOver(e, inside)}
      onDrop={handleDrop}
      onDoubleClick={() => handleDoubleClick(inside)}
      draggable={!runtime && !useble}
      {...props}
    >
      {!runtime ? <div className={styles.container__block}></div> : null}
      {children}
      {viewBorder && right ? <BorderIcon /> : null}
    </div>
  );
};

export default Container;
