import { FunctionComponent, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export const Section: FunctionComponent<SectionProps> = ({
  children,
  className,
}) => {
  return <section className={className}>{children}</section>;
};
