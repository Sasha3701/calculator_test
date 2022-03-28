import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type postionTypes = "runtime" | "constructor";

export interface IButton {
  id: number;
  text: string;
  renderImg: (active: boolean) => ReactNode;
  variant: postionTypes;
}

export interface SwitcherProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position: postionTypes;
  handleChange: () => void;
}
