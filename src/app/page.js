import Image from "next/image";
import Header from "./Header";
import Navbarizq from "./Navbarizq";
import Center from "./Center";
import Navbarder from "./Navbarder";

export default function Home() {
  return (
    <main className="flex">
      <Header />
      <Navbarizq />
      <Center />
      <Navbarder />
    </main>
  );
}
