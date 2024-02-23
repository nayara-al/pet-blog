import style from "./FormField.module.css";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export default function FormField({ id, label, placeholder, ...props }: FormFieldProps) {
  return (
    <div className={style.formField}>
      <label htmlFor={id} className={style.label}>{label}:</label>
      <input className={style.input} placeholder={placeholder} required id={id} {...props} />
    </div>
  );
}
