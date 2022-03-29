import { Button, Container } from "../UI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { activeBlockTypes } from "../../types";
import { OperationsProps } from "./Operations.props";

const operations: string[] = ["/", "x", "-", "+"];

const Operations = ({ right }: OperationsProps): JSX.Element => {
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "actions")
  );

  return (
    <Container inside="actions" useble={useble && !right} right={right}>
      {operations.map((item: string, i: number) => (
        <Button key={i} size="small" variant="white">
          {item}
        </Button>
      ))}
    </Container>
  );
};

export default Operations;
