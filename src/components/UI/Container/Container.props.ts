import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { activeBlockTypes } from "../../../types";

export type insideTypes = activeBlockTypes | "result";

export interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  inside: insideTypes;
  right?: boolean;
  runtime?: boolean;
  useble?: boolean;
}
