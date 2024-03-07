import { PawPrint } from "@phosphor-icons/react";
import style from "./FormRegister.module.css";
import * as Component from "../index";
import { FormEvent, useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

export default function FormRegister() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatePassword, setRepeatePassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const user = {
      name,
      email,
      password,
    };

    if (password !== repeatePassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    console.log(user);
    try {
      await createUser(user);
    } catch {
      setError("Algo deu errado, tente novamente mais tarde.");
    }
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
          {!loading && (
            <Component.Button buttonType="secondary">
              Cadastrar
            </Component.Button>
          )}
          {loading && (
            <Component.Button buttonType="secondary" disabled>
              Aguarde...
            </Component.Button>
          )}

          {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
}
