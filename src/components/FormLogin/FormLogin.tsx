/* eslint-disable @typescript-eslint/no-explicit-any */
import { PawPrint } from "@phosphor-icons/react";
import style from "./FormLogin.module.css";
import * as Component from "../index";
import { useAuthentication } from "../../hooks/useAuthentication";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IUser, initialValue } from "../../interface/user";

export default function FormLogin() {
  const [userLogin, setUserLogin] = useState<IUser>(initialValue);
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLogin((previewValue: any) => ({
      ...previewValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await login(userLogin);
    } catch(error) {
      console.error(error)
    }
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
            required
            onChange={handleChange}
          />
          <Component.FormFieldText
            id="password"
            label="Senha"
            placeholder="Escolha uma senha"
            required
            onChange={handleChange}
            type="password"
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
