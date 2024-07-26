import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
} & ComponentPropsWithoutRef<"button">;

export default function Button({ text, onClick, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button} onClick={handleOnClick}>
      {text}
    </button>
  );
}
