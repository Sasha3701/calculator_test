import { memo, useCallback } from "react";
import { Button, Container } from "../UI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { changeValue } from "../../store/numSlice";
import { activeBlockTypes } from "../../types";
import { NumbersProps } from "./Numbers.props";

const numbers: string[] = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  ",",
];

const Numbers = memo(({ right }: NumbersProps) => {
  const dispatch = useDispatch();
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "numbers")
  );

  const mode = useSelector((state: RootState) => state.calc.mode);

  const handlePress = useCallback((value: string) => {
    dispatch(changeValue(value));
  }, []);

  return (
    <Container
      inside="numbers"
      useble={useble && !right}
      right={right}
      runtime={mode === "runtime"}
    >
      {numbers.map((item: string, i: number) => (
        <Button
          key={i}
          size={item === "0" ? "large" : "medium"}
          variant="white"
          onClick={() => handlePress(item)}
        >
          {item}
        </Button>
      ))}
    </Container>
  );
});

export default Numbers;
