import { Welcome } from "@/components/Partials/Welcome";
import { client } from "@/services/prismicClient";

export default async function Home() {
  const data = await client.getSingle("entrada_do_site");   
  console.log(data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Welcome />
    </main>
  );
}
