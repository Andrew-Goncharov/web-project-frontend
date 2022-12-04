import React, { ChangeEvent, KeyboardEventHandler } from "react";
import styles from "./Input.module.css";

export interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  className: string;
  placeholder: string;
}

function Input({
  onChange, value, className, placeholder,
}: InputProps) {
  return (
    <input
      className={`${styles.input} ${className}`}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
