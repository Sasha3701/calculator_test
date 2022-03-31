import { memo, useCallback } from "react";
import { Button, Container } from "../UI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { pressCalc } from "../../store/numSlice";
import { activeBlockTypes } from "../../types";
import { OperationsProps } from "./Operations.props";

const operations: string[] = ["/", "x", "-", "+"];

const Operations = memo(({ right }: OperationsProps): JSX.Element => {
  const dispatch = useDispatch();
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "actions")
  );

  const mode = useSelector((state: RootState) => state.calc.mode);

  const handlePress = useCallback((value: string) => {
    dispatch(pressCalc(value === "x" ? "*" : value));
  }, []);

  return (
    <Container
      inside="actions"
      useble={useble && !right}
      right={right}
      runtime={mode === "runtime"}
    >
      {operations.map((item: string, i: number) => (
        <Button
          key={i}
          size="small"
          variant="white"
          onClick={() => handlePress(item)}
        >
          {item}
        </Button>
      ))}
    </Container>
  );
});

export default Operations;
