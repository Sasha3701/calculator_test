import { memo } from "react";
import { Container, Display as DisplayComponent } from "../UI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { activeBlockTypes } from "../../types";
import { DisplayProps } from "./Display.props";

const Display = memo(({ right }: DisplayProps): JSX.Element => {
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "display")
  );

  const mode = useSelector((state: RootState) => state.calc.mode);
  const num = useSelector((state: RootState) => state.num.value);

  return (
    <Container
      inside="display"
      useble={useble && !right}
      right={right}
      runtime={mode === "runtime"}
    >
      <DisplayComponent value={num ? num : "0"} />
    </Container>
  );
});

export default Display;
