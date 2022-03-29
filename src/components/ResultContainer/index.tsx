import { DragEvent, ChangeEvent } from "react";
import styles from "./index.module.scss";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { IElements } from "../../interfaces";
import Display from "../Display";
import Operations from "../Operations";
import Numbers from "../Numbers";
import Equals from "../Equals";
import { activeBlockTypes } from "../../types";
import ZoneEmpty from "../EmptyZone";
import { addBlock } from "../../store/calcSlice";

const elements: IElements = {
  display: (key) => <Display key={key} right={true} />,
  actions: (key) => <Operations key={key} right={true} />,
  numbers: (key) => <Numbers key={key} right={true} />,
  action: (key) => <Equals key={key} right={true} />,
};

const ResultContainer = (): JSX.Element => {
  const { activeBlock, mode, current, pos } = useSelector((state: RootState) => state.calc);
  const dispatch = useDispatch();

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    const event = e as unknown as ChangeEvent<HTMLDivElement>;
    if(!activeBlock.length) {
      event.target.style.backgroundColor = "#FFFFFF";
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const event = e as unknown as ChangeEvent<HTMLDivElement>;
    if(!activeBlock.length) {
      event.target.style.backgroundColor = "#F0F9FF";
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(addBlock({ block: current!, position: pos }))
  };

  return (
    <div
      onDragLeave={handleDragEnd}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={styles.container}
    >
      {activeBlock.length || mode === "runtime" ? (
        <div className={styles.result}>
          {activeBlock.map((item: activeBlockTypes, i: number) =>
            elements[item](i)
          )}
        </div>
      ) : (
        <ZoneEmpty />
      )}
    </div>
  );
};

export default ResultContainer;
