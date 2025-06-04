import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeSection from "./components/sections/Home";
import ABoutSection from "./components/sections/About";

export default function Home(){
  return(
    <main className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HomeSection />
        <ABoutSection />
      </main>
      <Footer />
    </main>
  )
}