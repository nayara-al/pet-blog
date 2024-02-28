import { PawPrint } from "@phosphor-icons/react";
import style from "./FormRegister.module.css";
import * as Component from "../index";
import { FormEvent, useEffect, useState } from "react";

export default function FormRegister() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatePassword, setRepeatePassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    /* const user = {
      displayName,
      email,
      password,
    }; */

    if (password !== repeatePassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    //const res = await createUser(user);

    console.log(name, email, password, repeatePassword);
    //console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={style.container}>
      <h1 className={style.headTitle}>Cadastre-se para postar</h1>
      <form className={style.formBase} onSubmit={handleRegister}>
        <div className={style.PawRegister}>
          <PawPrint size={40} color="white" weight="fill" />
        </div>
        <h2></h2>
        <div className={style.formFields}>
          <Component.FormFieldText
            id="name"
            label="Nome"
            placeholder="Qual seu nome?"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <Component.FormFieldText
            id="email"
            label="E-mail"
            placeholder="Informe seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Component.FormFieldText
            id="password"
            label="Senha"
            placeholder="Escolha uma senha"
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Component.FormFieldText
            id="repeatPassword"
            label="Confirmação de senha"
            placeholder="Confirme sua senha"
            required
            type="password"
            value={repeatePassword}
            onChange={(event) => setRepeatePassword(event.target.value)}
          />
          <Component.Button buttonType="secondary">Cadastrar</Component.Button>
        </div>
      </form>
    </div>
  );
}
