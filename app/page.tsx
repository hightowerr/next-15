import { Navbar1 } from "@/components/Navbar";
import { Hero1 } from "../components/Hero";


const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#F2F0EF]">
        <Navbar1 />
        <main className="flex-grow flex flex-col">
          <Hero1 
            heading="Ready to Work Smarter with AI?"
            description="Ready to save time and reduce costs? Our small team specialises in custom AI solutions that deliver real results. Tell us about your challenges today."
          />
        </main>
      </div>
    </>
  );
};

export default App;