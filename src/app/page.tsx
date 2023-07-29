"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";

import "./styles.css";

export default function Home() {
  const router = useRouter();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    // console.log(username, password);
    // fetch("http://localhost:4000/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: username,
    //     password,
    //   }),
    //   credentials: "include",
    // })
    authService
      .login(username, password)
      .then((token) => {
        console.log(token);
        if (token) {
          localStorage.setItem("token", token);
          router.push("/dashboard");
        } else {
          alert("Erro na autenticação");
        }
      })
      .catch((err) => {
        console.log(err);
        // alert(err);
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
          <input id="username" type="text" placeholder="Username" />
          <label htmlFor="password" className="labeltext">
            Senha
          </label>
          <input id="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </main>
  );
}
