import { ComponentPropsWithoutRef } from "react";
import styles from "./Input.module.css";

export type FormEvent = React.ChangeEvent<HTMLInputElement>;

type InputProps = {
  id: string;
  text: string;
  onChange: (e: FormEvent) => void;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ id, text, onChange, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <input
        {...props}
        className={styles.input}
        id={id}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
