"use client";
import { Design } from "@/Components/Page/Design/Design";
import Footer from "@/Components/Page/Footer/Footer";
import { Header } from "@/Components/Page/Header/Header";
import Hero from "@/Components/Page/Hero/Hero";
import Infrastructure from "@/Components/Page/Infrastructure/Infrastructure";
import Syntax from "@/Components/Page/Syntax/Syntax";

export default function Home() {
  return (
    <>
      <Header displayCSS={"fixed"} />
      <Hero />
      <Design />
      <Infrastructure />
      <Syntax />
      <Footer />
    </>
  );
}
