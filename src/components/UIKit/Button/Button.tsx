import React from "react";
import styles from "./Button.module.css";

interface InputProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const defaultProps = {
  children: "button",
  type: "button",
  onClick: () => null,
};

function Button({ children, type, onClick }: InputProps) {
  const onClickHandler = () => {
    if (onClick !== undefined) onClick();
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClickHandler} className={styles.button} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
