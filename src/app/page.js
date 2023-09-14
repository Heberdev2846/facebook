import Image from "next/image";
import Header from "./Header";
import Navbarizq from "./Navbarizq";
import Center from "./Center";

export default function Home() {
  return (
    <main className="flex">
      <Header />
      <Navbarizq />
      <Center />
      <div className="pt-20 mt-3 w-[360px] border">
        <div>
          <h1>Tus páginas y perfiles</h1>
        </div>
        
      </div>
      
    </main>
  );
}
