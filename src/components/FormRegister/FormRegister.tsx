/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { PawPrint } from "@phosphor-icons/react";
import style from "./FormRegister.module.css";
import * as Component from "../index";
import { useAuthentication } from "../../hooks/useAuthentication";
import { IUser, initialValue } from "../../interface/user";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [userRegister, setUserRegister] = useState<IUser>(initialValue);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate()

  const { createUser, error: authError, loading } = useAuthentication();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserRegister((previewValue: any) => ({
      ...previewValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (userRegister.password !== userRegister.confirmPassword) {
      setError("As senhas não conferem");
    }

    try {
      await createUser(userRegister);
      navigate("/login")
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
            id="displayName"
            label="Nome"
            placeholder="Qual seu nome?"
            onChange={handleChange}
            required
          />
          <Component.FormFieldText
            id="email"
            label="E-mail"
            placeholder="Informe seu e-mail"
            onChange={handleChange}
            required
          />
          <Component.FormFieldText
            id="password"
            label="Senha"
            placeholder="Escolha uma senha"
            required
            type="password"
            onChange={handleChange}
          />
          <Component.FormFieldText
            id="confirmPassword"
            label="Confirmação de senha"
            placeholder="Confirme sua senha"
            required
            type="password"
            onChange={handleChange}
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
