import { PawPrint } from "@phosphor-icons/react";
import style from "./FormRegister.module.css";
import * as Component from "../index";

export default function FormRegister() {
  return (
    <div className={style.container}>
      <h1 className={style.headTitle}>Cadastre-se para postar</h1>
      <form className={style.formBase}>
        <div className={style.PawRegister}>
          <PawPrint size={40} color="white" weight="fill" />
        </div>
        <h2></h2>
        <div className={style.formFields}>
          <Component.FormFieldText
            id="name"
            label="Nome"
            placeholder="Qual seu nome?"
            required
          />
          <Component.FormFieldText
            id="email"
            label="E-mail"
            placeholder="Informe seu e-mail"
            required
          />
          <Component.FormFieldText
            id="password"
            label="Senha"
            placeholder="Escolha uma senha"
            required
            type="password"
          />
          <Component.FormFieldText
            id="repeatPassword"
            label="Confirmação de senha"
            placeholder="Confirme sua senha"
            required
            type="password"
          />
          <Component.Button buttonType="secondary">Cadastrar</Component.Button>
        </div>
      </form>
    </div>
  );
}
