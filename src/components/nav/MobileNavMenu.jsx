// Package Imports
import React from "react";
import {
  useTheme,
  IconButton,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Project-defined Imports
import {
  CouncilNavMenuItems,
  EventNavMenuItems,
  SponsorNavMenuItems,
} from "./menu-items";

export const MobileNavMenu = ({
  isOpen,
  onToggle,
  onItemClick,
  isRecruiting,
}) => {
  const theme = useTheme();

  return (
    <>
      {/* Mobile Menu Button */}
      <IconButton
        color="inherit"
        aria-label="menu"
        onClick={onToggle}
        sx={{
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "block",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Navigation Menu */}
      <Collapse
        in={isOpen}
        timeout="auto"
        unmountOnExit
        sx={{
          display: "none",
          [theme.breakpoints.down("md")]: {
            display: "block",
          },
        }}
      >
        <Box sx={{ backgroundColor: theme.palette.blue.primary, p: 2 }}>
          <Box
            component="a"
            href="#about-zoo"
            onClick={onItemClick}
            sx={{
              display: "block",
              padding: theme.spacing(1.5),
              color: theme.palette.white.secondary,
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: theme.typography.body1.fontFamily,
              "&:hover": {
                backgroundColor: theme.palette.blue.hover,
              },
            }}
          >
            About
          </Box>

          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                padding: theme.spacing(1.5, 0),
                color: theme.palette.white.secondary,
                "&:hover": {
                  backgroundColor: theme.palette.blue.hover,
                },
              }}
            >
              <Typography>Council</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CouncilNavMenuItems
                  handleClose={onItemClick}
                  isRecruiting={isRecruiting}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                padding: theme.spacing(1.5, 0),
                color: theme.palette.white.secondary,
                "&:hover": {
                  backgroundColor: theme.palette.blue.hover,
                },
              }}
            >
              <Typography>Events</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <EventNavMenuItems handleClose={onItemClick} />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                padding: theme.spacing(1.5, 0),
                color: theme.palette.white.secondary,
                "&:hover": {
                  backgroundColor: theme.palette.blue.hover,
                },
              }}
            >
              <Typography>Sponsors</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <SponsorNavMenuItems handleClose={onItemClick} />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box
            component="a"
            href="https://docs.google.com/forms/d/1xklzzmnqItOQTrWebtIDlzhENleiMcjl9xAfOhq5yR4/preview"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onItemClick}
            sx={{
              display: "block",
              padding: theme.spacing(1.5),
              color: theme.palette.white.secondary,
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: theme.typography.body1.fontFamily,
              "&:hover": {
                backgroundColor: theme.palette.blue.hover,
              },
            }}
          >
            Merch
          </Box>

          <Box
            component="a"
            href="#contact-us"
            onClick={onItemClick}
            sx={{
              display: "block",
              padding: theme.spacing(1.5),
              color: theme.palette.white.secondary,
              textDecoration: "none",
              fontSize: "1rem",
              fontFamily: theme.typography.body1.fontFamily,
              "&:hover": {
                backgroundColor: theme.palette.blue.hover,
              },
            }}
          >
            Contact Us
          </Box>
        </Box>
      </Collapse>
    </>
  );
};

export default MobileNavMenu;
