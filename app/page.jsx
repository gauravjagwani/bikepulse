import PopularBikes from "@/components/PopularBikes";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <PopularBikes />
    </main>
  );
}
