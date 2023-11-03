"use client";
import { useAPI } from "@/Hook/useAPI";
import Link from "next/link";
export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const repositorio = useAPI(
    "https://api.github.com/users/DanielMarcosPires/repos",
  );

  return (
    <div>
      <header>
        <Link className="text-2xl" href="/">
          Voltar
        </Link>
      </header>
      {repositorio.map((item, quantidade) => (
        <a
          className="block border bg-slate-300 transition-all hover:bg-slate-50"
          href={item.html_url}
        >
          <h2 className="text-2xl">
            {item.name} ({quantidade + 1})
          </h2>
          <p>{item.html_url}</p>
        </a>
      ))}
    </div>
  );
}
