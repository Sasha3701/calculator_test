import { memo, useCallback } from "react";
import { Button, Container } from "../UI";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { math } from "../../store/numSlice";
import { activeBlockTypes } from "../../types";
import { EqualsProps } from "./Equals.props";

const Equals = memo(({ right }: EqualsProps): JSX.Element => {
  const dispatch = useDispatch();
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "action")
  );

  const mode = useSelector((state: RootState) => state.calc.mode);

  const handlePress = useCallback(() => {
    dispatch(math());
  }, [])

  return (
    <Container
      inside="action"
      useble={useble && !right}
      right={right}
      runtime={mode === "runtime"}
      onClick={handlePress}
    >
      <Button size="large" variant="blue">
        =
      </Button>
    </Container>
  );
});

export default Equals;
