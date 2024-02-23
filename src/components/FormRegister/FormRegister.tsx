import { PawPrint } from "@phosphor-icons/react";
import style from "./FormRegister.module.css";
import FormField from "../FormFieldText/FormField";
export default function FormRegister() {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <form className={style.formBase}>
        <div className={style.PawRegister}>
          <PawPrint size={40} color="white" weight="fill" />
        </div>
        <h2></h2>
        <div className={style.formFields}>
          <FormField id="name" label="Nome" placeholder="Qual seu nome?"/>
          <FormField id="email" label="E-mail" placeholder="Informe seu e-mail"/>
        </div>
      </form>
    </div>
  );
}
