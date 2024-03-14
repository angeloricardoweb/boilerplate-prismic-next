import { Welcome } from "@/components/Partials/Welcome";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Welcome />
    </main>
  );
}
