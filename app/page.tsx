// import SiteHeader from "./components/siteheader";
import Hero from "./components/sections/hero";
import WhyWebAceExist from "./components/sections/why-webace-exist";
import HowWeDrive from "./components/sections/how-we-drive";
import KnowledgeSection from "@/app/components/sections/knowledge";
import StrategySection from "./components/sections/strategy";
import TimelineSection from "./components/sections/timeline";
import MarketingSection from "./components/sections/marketing";
import ResultSection from "./components/sections/result";
import SliderSection from "./components/sections/slider";
import BlackctaSection from "./components/sections/blackcta";
import TabbingSection from "./components/sections/tabbing-section";
import TeamSection from "./components/sections/team-cta";
import ClientSection from "./components/sections/client";
import CtaSection from "./components/sections/cta";
import DigitalSection from "./components/sections/digitalempire";
// import FooterSection from "./components/sections/footer";

export default function Page() {
  return (
    <>
     
      <Hero />
      <WhyWebAceExist />
      <HowWeDrive />
      <DigitalSection />
      <StrategySection />
      <TimelineSection />
      <MarketingSection />
      <ResultSection/>
      <SliderSection />
      <CtaSection />
      <ClientSection />
      <BlackctaSection />
      <TabbingSection />
      <TeamSection />
      <KnowledgeSection />
      
    </>
  );
}