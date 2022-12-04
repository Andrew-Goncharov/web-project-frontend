import React from "react";
import styles from "./Button.module.css";

interface InputProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined,
}

const defaultProps = {
  children: "button",
  type: "button",
};

function Button({ children, type }: InputProps) {
  // eslint-disable-next-line react/button-has-type
  return <button className={styles.button} type={type}>{children}</button>;
}

Button.defaultProps = defaultProps;

export default Button;
