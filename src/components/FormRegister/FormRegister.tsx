import { PawPrint } from "@phosphor-icons/react";
import style from "./FormRegister.module.css";
import * as Component from "../index"

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
          <Component.FormField id="name" label="Nome" placeholder="Qual seu nome?" />
          <Component.FormField
            id="email"
            label="E-mail"
            placeholder="Informe seu e-mail"
          />
          <Component.FormField
            id="password"
            label="Senha"
            placeholder="Escolha uma senha"
          />
          <Component.FormField
            id="repeatPassword"
            label="Repetir senha"
            placeholder="Repita a senha escolhida"
          />
          <Component.Button buttonType="secondary">Cadastrar</Component.Button>
        </div>
      </form>
    </div>
  );
}
