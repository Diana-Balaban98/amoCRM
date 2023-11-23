import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import s from "./button.module.scss";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
) => {
  const { as: Component = "button", className, ...rest } = props;

  return <Component className={`${s.btn} ${className}`} {...rest} />;
};
