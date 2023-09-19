'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
        toast.error("Usuario Registrado Com Sucesso")
  }catch {
      refresh();
      toast.error("erro na aplicação")
    }
  }

  return (
    <div>
      <h1>Registrar</h1>
      <form onSubmit={handlerLogin}>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
