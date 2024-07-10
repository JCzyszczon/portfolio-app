import MainPanel from "./components/mainPanel";
import AboutMe from "./components/aboutMe";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start sm:py-32 py-24'>
      <MainPanel />
      <AboutMe />
    </main>
  );
}
