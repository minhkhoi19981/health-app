import { InputHTMLAttributes, forwardRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Input.stylex";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input: React.FC<InputProps> = forwardRef(({ label, error, name, ...props }, ref: any) => {
  return (
    <div {...stylex.props(styles.box)} key={name}>
      <label htmlFor={name} {...stylex.props(styles.label)}>
        {label}
      </label>
      <input {...props} key={name} name={name} id={name} ref={ref} {...stylex.props(styles.input)} />
      {error && <span {...stylex.props(styles.error)}>{error}</span>}
    </div>
  );
});

export default Input;
