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
  const theme = useTheme()

  return (
    <ThemeProvider theme={rootTheme}>
      <Navbar id="back-to-top-anchor" isRecruiting={isRecruiting} />
      <Carousel />
      {/* <Container */}
      {/* // maxWidth='md' 
        // sx={{ padding: theme.spacing(10, 0) }} > */}
      <div
        style={{
          position: "absolute",
          bottom: theme.spacing(-18.5),
          left: 0,
          width: "100%",
          transform: "rotate(180deg)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            position: "relative",
            display: "block",
            width: "calc(144% + 1.3px)",
            height: theme.spacing(12.5),
            transform: "rotateY(180deg)",
          }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={{
              fill: "#F8F8F8",
            }}
          ></path>
        </svg>
      </div>
      <AboutSection />
      <CouncilSection isRecruiting={isRecruiting} />
      <EventSection />
      {/* </Container> */}
      <ScrollToTopButton />
    </ThemeProvider >
  );
}

export default LandingPage;
