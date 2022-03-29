import { Button, Container } from "../UI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { activeBlockTypes } from "../../types";
import { EqualsProps } from "./Equals.props";

const Equals = ({ right }: EqualsProps): JSX.Element => {
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "action")
  );

  return (
    <Container inside="action" useble={useble && !right} right={right}>
      <Button size="large" variant="blue">
        =
      </Button>
    </Container>
  );
};

export default Equals;
