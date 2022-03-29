import { Button, Container } from "../UI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { activeBlockTypes } from "../../types";
import { EqualsProps } from "./Equals.props";

const Equals = ({ right }: EqualsProps): JSX.Element => {
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "action")
  );

  const mode = useSelector((state: RootState) => state.calc.mode);

  return (
    <Container inside="action" useble={useble && !right} right={right} runtime={mode === 'runtime'}>
      <Button size="large" variant="blue">
        =
      </Button>
    </Container>
  );
};

export default Equals;
