import React, { FunctionComponent } from "react";
import cn from "classnames";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick: () => void;
  isDisabled: boolean;
  testId?: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ label, onClick, isDisabled, testId }) => {
  return (
    <button data-testid={testId} className={cn(styles.button)} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};
