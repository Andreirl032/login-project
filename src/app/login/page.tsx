"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";

import "./styles.css";

export default function Login() {
  const router = useRouter();

  const [incorrectCredentials, setIncorrectCredentials] = useState<
    Array<{ message: string }> | { message: string }
  >([{ message: "" }]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    authService
      .login(username, password)
      .then((token) => {
        if (token) {
          localStorage.setItem("isAuthenticated", "true");
          router.push("/");
        } else {
          alert("Erro na autenticação");
        }
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors ??
          err.response.data ?? { message: "Ocorreu um erro!" };
        setIncorrectCredentials(errorResponse);
      });
  };

  return (
    <main className="main">
      <div className="container">
        <h1 className="container-title">Login</h1>
        <form className="form-login" onSubmit={submitHandler}>
          <label htmlFor="username" className="labeltext">
            E-mail
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            onChange={() => setIncorrectCredentials([{ message: "" }])}
            className={
              (Array.isArray(incorrectCredentials)
                ? incorrectCredentials[0]?.message
                : incorrectCredentials?.message) !== ""
                ? "wrong-input"
                : "correct-input"
            }
          />
          <label htmlFor="password" className="labeltext">
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={() => setIncorrectCredentials([{ message: "" }])}
            className={
              (Array.isArray(incorrectCredentials)
                ? incorrectCredentials[0]?.message
                : incorrectCredentials?.message) !== ""
                ? "wrong-input"
                : "correct-input"
            }
          />
          <button type="submit">Login</button>
          {Array.isArray(incorrectCredentials) ? (
            incorrectCredentials.map((element: any) => {
              const { message } = element;
              return <p className="incorrect-credentials">{message}</p>;
            })
          ) : (
            <p className="incorrect-credentials">
              {incorrectCredentials?.message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
