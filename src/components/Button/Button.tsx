import { ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary";
}
export default function Button({ buttonType, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        buttonType === "primary" ? style.btnPrimary : style.btnSecondary
      }
    >
      {props.children}
    </button>
  );
}
