import MainPanel from "./components/mainPanel";
import AboutMe from "./components/aboutMe";
import Socials from "./components/socials";
import Popup from "./components/popup";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start sm:py-32 py-24 relative'>
      <MainPanel />
      <Popup />
      <Socials />
      <AboutMe />
      <Skills />
    </main>
  );
}
