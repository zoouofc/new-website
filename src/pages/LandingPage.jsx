// Project-defined Imports
import { ScrollToTopButton } from "../components/buttons/ScrollToTopButton";
import { Carousel } from "../components/carousel/Carousel";
import { AboutSection } from "../components/AboutSection";
import { CouncilSection } from "../components/council/CouncilSection";
import { EventSection } from "../components/events/EventSection";
import { SponsorSection } from "../components/sponsors/SponsorSection";

const LandingPage = ({ isRecruiting }) => {
  return (
    <>
      <Carousel />
      <AboutSection />
      <CouncilSection isRecruiting={isRecruiting} />
      <EventSection />
      <SponsorSection />
      <ScrollToTopButton />
    </>
  );
};

export default LandingPage;
