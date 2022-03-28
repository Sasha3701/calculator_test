import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type buttonSizeTypes = "small" | "medium" | "large";

export type buttonVariantTypes = "white" | "blue";

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  size?: buttonSizeTypes;
  variant?: buttonVariantTypes;
};
