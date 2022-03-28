import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type insideTypes = "actions" | "action" | "display" | "number" | "result";

export interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  inside: insideTypes;
  right?: boolean;
}
