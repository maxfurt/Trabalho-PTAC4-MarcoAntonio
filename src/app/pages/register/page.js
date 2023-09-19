'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import styles from "./Register.module.css";

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { refresh } = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        toast.error("Usuario Registrado Com Sucesso")
  }catch {
      refresh();
      toast.error("erro na aplicação")
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Registrar</h1>
      <form onSubmit={handleRegister}>
        <input
          className={styles.input}
          placeholder='Nome'
          type="text"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
        />
        <input
          className={styles.input}
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
        />
        <input
          className={styles.input}
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
        />
        <button className={styles.button}>Registrar</button>
      </form>
      <ToastContainer />
    </div>
  );
}