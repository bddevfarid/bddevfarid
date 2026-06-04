import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SkillsExperience from "@/components/SkillsExperience";
import RecentWork from "@/components/RecentWork";
import MyService from "@/components/MyService";
import StayUpdated from "@/components/StayUpdated";
import ClientsFeedback from "@/components/ClientsFeedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <SkillsExperience />
        <RecentWork />
        <MyService />
        <StayUpdated />
        <ClientsFeedback />
      </main>
      <Footer />
    </>
  );
}
