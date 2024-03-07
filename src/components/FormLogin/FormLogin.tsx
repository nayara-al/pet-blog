import { PawPrint } from "@phosphor-icons/react";
import style from "./FormLogin.module.css";
import * as Component from "../index";
import { useAuthentication } from "../../hooks/useAuthentication";
import { FormEvent, useEffect, useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };
  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <div className={style.container}>
      <h1 className={style.headTitle}>Faça login</h1>
      <form className={style.formBase} onSubmit={handleSubmit}>
        <div className={style.PawRegister}>
          <PawPrint size={40} color="white" weight="fill" />
        </div>
        <h2></h2>
        <div className={style.formFields}>
          <Component.FormFieldText
            id="email"
            label="E-mail"
            placeholder="Informe seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Component.FormFieldText
            id="password"
            label="Senha"
            placeholder="Escolha uma senha"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          {!loading && (
            <Component.Button buttonType="primary" type="submit">
              Entrar
            </Component.Button>
          )}
          {loading && (
            <Component.Button buttonType="primary" type="submit" disabled>
              Aguarde...
            </Component.Button>
          )}
          {error && <p className="error">{error}</p>}
        </div>
      </form>
    </div>
  );
}
