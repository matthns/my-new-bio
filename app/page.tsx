import { Aboutme } from "./components/about-me/About-me";
import { Experience } from "./components/experience/Experience";
import { Header } from "./components/header/Header";
import { SectionLayout } from "./components/layout/SectionLayout";
import { Stack } from "./components/stack/Stack";

export default function Home() {
  return (
    <main className="max-w-screen min-h-[100svh] md:max-w-[390px] md:mx-auto">
      <SectionLayout>
        <Header />
        <Aboutme />
        <Experience />
        <Stack />
      </SectionLayout>
    </main>
  );
}
