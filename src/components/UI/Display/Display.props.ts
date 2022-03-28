import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DisplayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: number;
}
