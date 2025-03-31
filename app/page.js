import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Process />
    </main>
  );
}
