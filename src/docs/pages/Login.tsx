import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import Button from "../../components/Button";
import { Text } from "../../components/Text";
import { TextField } from "../../components/TextField";

// import { AlertContext } from "@/contexts/Alert";
// import { Link, useForm } from "@inertiajs/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  // Comment out to use the form

  // const { showAlert } = useContext(AlertContext);
  // const { setData, post } = useForm({
  //   email: "",
  //   password: "",
  // });
  // const submitLoginData = (e) => {
  //   e.preventDefault();
  //   post("/sign_in", {
  //     onError: (e) => {
  //       showAlert({ message: e });
  //     },
  //   });
  // };

  return (
    <>
      <div className="flex h-screen w-screen justify-center">
        <div className="relative flex h-full w-screen items-center justify-center md:w-1/2 ">
          <div className="flex h-4/5 w-full flex-col justify-center px-6 md:w-auto md:p-0">
            <img className="h-[43px] w-[170px]" src="/vite.svg" alt="zenmobi_logo" />
            <Text size="sm" as="h2" className="m-0 pt-5 text-gray-600 md:pt-10">
              SEJA BEM-VINDO DE VOLTA
            </Text>
            <Text size="3xl" as="h1" className="m-0 pb-14 pt-4 text-3xl text-gray-950">
              Entre na sua conta Zenmobi
            </Text>
            <form>
              <TextField
                name="email"
                className="mb-5 rounded-sm focus:border-primary-400"
                label="E-mail"
                placeholder="Insira seu e-email"
                type="email"
              />
              <TextField
                name="password"
                className="rounded-sm focus:border-primary-400"
                label="Senha"
                placeholder="Insira sua senha"
                type={showPassword ? "text" : "password"}
                rightIcon={showPassword ? EyeIcon : EyeSlashIcon}
                onClickIcon={showPasswordIcon}
              />
              <a href="/password/step_one">
                <Text
                  size="sm"
                  as="p"
                  className="m-0 w-full cursor-pointer pt-6 text-right text-gray-800"
                >
                  Esqueceu sua senha?
                </Text>
              </a>
              <Button
                className="mt-6 rounded-sm bg-gray-950 text-white hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-800"
                label="Entrar"
                size="lg"
              />
            </form>
            <Button
              className="mt-4 rounded-sm border border-solid border-gray-100 text-gray-800 hover:bg-gray-100 focus:border-2 active:bg-gray-200"
              label="Entrar com o Outlook"
              variant="outline"
              size="lg"
              iconSide="left"
            />
            <Text size="sm" className="cursor-pointer pt-6 text-center text-gray-600">
              Não possui uma conta?
            </Text>
            <Text size="sm" className="cursor-pointer pt-2.5 text-center text-gray-950">
              Saiba mais
            </Text>
          </div>
        </div>
        <img
          className="hidden h-full w-1/2 object-cover md:block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-iI_NggJ-gRlBUeztTvGuU7bufWgj4NuQg"
          alt="living_room"
        />
      </div>
    </>
  );
};

export default Login;
