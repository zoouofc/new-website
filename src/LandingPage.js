// Package Imports
import React from "react";
import { Container } from "@mui/system";

// Styling
import { rootTheme } from "./components/Theme";
import { ThemeProvider } from "@mui/system";

// Project-defined Imports
import { Navbar } from "./components/nav/Navbar";
import { ScrollToTopButton } from './components/buttons/ScrollToTopButton';
import { Carousel } from "./components/carousel/Carousel";
import { AboutSection } from "./components/AboutSection";
import { CouncilSection } from "./components/council/CouncilSection";
import { EventSection } from "./components/events/EventSection";
import { useTheme } from "@mui/material";

const LandingPage = () => {
  // Variable to manually update when we are no longer recruiting. Improved approach to commenting out code as needed :)
  const isRecruiting = true;

  return (
    <ThemeProvider theme={rootTheme}>
      <Navbar id="back-to-top-anchor" isRecruiting={isRecruiting} />
      <Carousel />
      <AboutSection />
      <CouncilSection isRecruiting={isRecruiting} />
      <EventSection />
      <ScrollToTopButton />
    </ThemeProvider >
  );
}

export default LandingPage;
