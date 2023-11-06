import { Button } from "@/Components/Button/Button";
import Input from "@/Components/Page/Login/Input/Input";

export default function page() {
  return (
    <>
      <form
        className="m-auto my-20 flex h-[400px] w-1/2 flex-col justify-center rounded-2xl bg-gradient-to-r from-[#ff8f70] to-[#ff3d54] p-8"
        action=""
      >
        <Input className="py-2" type="text" label={"Nome:"} />
        <Input className="py-2" type="email" required label={"Email:"} />
        <Input className="py-2" type="password" required label={"Senha:"} />
        <Button className="rounded-xl py-2" variant="formulario">
          Submit
        </Button>
      </form>
    </>
  );
}
