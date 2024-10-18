import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormSignUp from "@/components/FormSignUp";

export default function SignUp() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Navbar />
      <FormSignUp />
      <Footer />
    </div>
  );
}
