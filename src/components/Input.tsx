import { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.css";

type InputProps = {
  id: string;
  text: string;
  onChange: () => void;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, text, onChange, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <input {...props} className={styles.input} id={id} onChange={onChange} />
    </div>
  );
}
