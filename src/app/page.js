import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import RecentWork from "@/components/RecentWork";
import MyService from "@/components/MyService";
import BestWork from "@/components/BestWork";
import StayUpdated from "@/components/StayUpdated";
import ClientsFeedback from "@/components/ClientsFeedback";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutMe />
        <RecentWork />
        <MyService />
        <BestWork />
        <StayUpdated />
        <ClientsFeedback />
      </main>
      <Footer />
    </>
  );
}
