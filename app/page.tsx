import { Navbar1 } from "@/components/Navbar";
import { Hero1 } from "../components/Hero";
import { Cta11 } from "../components/Cta";
import { Features1 } from "../components/Features";
import ButtonGradient from "../assets/svg/ButtonGradient";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F2F0EF]">
        <Navbar1 />
        <main className="flex-grow flex flex-col">
          <Hero1 />
        </main>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;