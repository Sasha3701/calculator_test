export const mathFunc = (operation: string, result: string, value: string) => {
  switch (operation) {
    case "+":
      return String(
        Math.round((parseFloat(result) + parseFloat(value)) * 10 ** 15) /
          10 ** 15
      ).replace(".", ",");
    case "-":
      return String(
        Math.round((parseFloat(result) - parseFloat(value)) * 10 ** 15) /
          10 ** 15
      ).replace(".", ",");
    case "/":
      const numResult =
        Math.round((parseFloat(result) / parseFloat(value)) * 10 ** 15) /
        10 ** 15;
      return numResult === Infinity
        ? "Не определено"
        : String(numResult).replace(".", ",");
    case "*":
      return String(
        Math.round(parseFloat(result) * parseFloat(value) * 10 ** 15) / 10 ** 15
      ).replace(".", ",");
  }
};
