import React from "react";
import styles from "./Button.module.css";

interface InputProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  style?: React.CSSProperties,
}

const defaultProps = {
  children: "button",
  type: "button",
  onClick: () => null,
  style: {},
};

function Button({
  children, type, onClick, style,
}: InputProps) {
  const onClickHandler = () => {
    if (onClick !== undefined) onClick();
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button style={style} onClick={onClickHandler} className={styles.button} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
