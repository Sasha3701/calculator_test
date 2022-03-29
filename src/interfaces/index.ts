export interface IElements {
    display: (key: number) => JSX.Element;
    actions: (key: number) => JSX.Element;
    numbers: (key: number) => JSX.Element;
    action: (key: number) => JSX.Element;
  }