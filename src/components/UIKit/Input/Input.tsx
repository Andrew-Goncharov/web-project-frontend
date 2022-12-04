import React from "react";
import styles from "./Input.module.css";

export interface InputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string | number;
  className?: string;
  placeholder?: string;
}

const defaultProps: InputProps = {
  onChange: () => null,
  onKeyDown: () => null,
  value: "",
  className: "",
  placeholder: "Click here to start",
};

function Input({
  onChange, value, className, placeholder, onKeyDown,
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${className}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = defaultProps;

export default Input;
