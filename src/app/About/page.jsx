import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
import AboutStory from "@/components/AboutStory";
import CardStatistic from "@/components/CardStatistic";
import Founder from "@/components/Founder";

export default function About() {
  return (
    <>
      <Header />
      <Navbar />
      <AboutStory />
      <CardStatistic />
      <Founder />
      <Service />
      <Footer />
    </>
  );
}
