import { Container, Display as DisplayComponent } from "../UI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { activeBlockTypes } from "../../types";
import { DisplayProps } from "./Display.props";

const Display = ({ right }: DisplayProps): JSX.Element => {
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "display")
  );

  return (
    <Container inside="display" useble={useble && !right} right={right}>
      <DisplayComponent value={100} />
    </Container>
  );
};

export default Display;
