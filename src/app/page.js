import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Carousel from "@/components/Carousel";
import FlashSales from "@/components/FlashSales";
import Category from "@/components/Category";
import BestProduct from "@/components/BestProduct";
import OurProduct from "@/components/OurProduct";
import Featured from "@/components/Featured";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Header />
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Carousel />
      </div>
      <FlashSales />
      <Category />
      <BestProduct />
      <OurProduct />
      <Featured />
      <Service />
      <Footer />
    </div>
  );
}
