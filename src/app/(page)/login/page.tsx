"use client";
import { Button } from "@/Components/Button/Button";
import Input from "@/Components/Page/Login/Input/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Insira o seu nome"),
  email: z.string().min(1, "Insira o seu email"),
  password: z.string().min(8, "A senha é no minimo 8 caracteres"),
});

type formSchema = z.infer<typeof schema>;
export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>();

  function handleSubmitForm(e: formSchema) {
    console.log(e);
  }
  return (
    <form
      className="m-auto my-20 flex h-[400px] w-1/2 flex-col justify-center rounded-2xl bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] p-8"
      action=""
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input
        {...register("name")}
        className="py-2"
        type="text"
        label={"Nome:"}
        error={errors.name?.message}
      />
      <Input
        {...register("email")}
        className="py-2"
        type="email"
        label={"Email:"}
        error={errors.email?.message}
      />
      <Input
        {...register("password")}
        className="py-2"
        type="password"
        label={"Senha:"}
        error={errors.password?.message}
      />
      <Button className="rounded-xl py-2" variant="formulario">
        Submit
      </Button>
    </form>
  );
}
