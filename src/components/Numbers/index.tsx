import { Button, Container } from "../UI";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
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

const Numbers = ({ right }: NumbersProps) => {
  const useble = useSelector((state: RootState) =>
    state.calc.activeBlock.some((item: activeBlockTypes) => item === "numbers")
  );

  return (
    <Container inside="numbers" useble={useble && !right} right={right}>
      {numbers.map((item: string, i: number) => (
        <Button key={i} size="medium" variant="white">
          {item}
        </Button>
      ))}
    </Container>
  );
};

export default Numbers;
