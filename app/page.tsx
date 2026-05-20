import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Lekcijas } from "@/components/sections/Lekcijas";
import { MajasDarbi } from "@/components/sections/MajasDarbi";
import { Platformas } from "@/components/sections/Platformas";
import { Cels } from "@/components/sections/Cels";
import { BrivaisLaiks } from "@/components/sections/BrivaisLaiks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Lekcijas />
      <MajasDarbi />
      <Platformas />
      <Cels />
      <BrivaisLaiks />
      <Footer />
    </main>
  );
}
