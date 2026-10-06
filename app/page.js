import Hero from "@/components/Hero";
import BirthdayMessage from "@/components/BirthdayMessage";
import Memories from "@/components/Memories";
import Gallery from "@/components/Gallery";
import Reasons from "@/components/Reasons";
import OpenWhen from "@/components/OpenWhen";
import Surprise from "@/components/Surprise";
import MusicPlayer from "@/components/MusicPlayer";
import ReasonsHate from "@/components/ReasonsHate";

export default function Home() {
  return (
    <main>
      <Hero />

      <BirthdayMessage />

      <Memories />

      <Gallery />

      <Reasons />

      <ReasonsHate />

      <OpenWhen />

      <Surprise />

      <MusicPlayer />
    </main>
  );
}