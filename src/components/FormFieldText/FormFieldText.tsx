import { InputHTMLAttributes } from "react";
import style from "./FormFieldText.module.css";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
}

export default function FormFieldText({ id, label, placeholder, ...props }: FormFieldProps) {
  return (
    <div className={style.formField}>
      <label htmlFor={id} className={style.label}>{label}:</label>
      <input className={style.input} placeholder={placeholder} required id={id} {...props} />
    </div>
  );
}
