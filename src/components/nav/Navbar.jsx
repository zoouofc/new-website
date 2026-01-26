// TODO: Add the ZOO easter egg by clicking on the avatar

// Package Imports
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  Avatar,
  Box,
} from "@mui/material";

// Project-defined Imports
import {
  CouncilNavMenuItems,
  EventNavMenuItems,
  SponsorNavMenuItems,
} from "./menu-items";
import NonPopoverNavItem from "./NonPopoverNavItem";
import NavMenuPopover from "./popover/NavMenuPopover";
import MobileNavMenu from "./MobileNavMenu";

// Images
import ZooLogo from "../../assets/ZooLogo.svg";

export const Navbar = ({ id, isRecruiting }) => {
  const theme = useTheme();
  const variant = "body1";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="static"
      id={id}
      sx={{
        backgroundColor: theme.palette.blue.primary,
      }}
    >
      <CssBaseline />
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Avatar alt="Zoo Logo" src={ZooLogo} />
        {/* Desktop Navigation */}
        <Box
          sx={{
            display: "flex",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <NonPopoverNavItem
            variant={variant}
            label="About"
            href="#about-zoo"
          />
          <NavMenuPopover
            variant={variant}
            menuId={"council-menu"}
            buttonLabel={"Council"}
            buttonId={"council-nav-button"}
          >
            <CouncilNavMenuItems isRecruiting={isRecruiting} />
          </NavMenuPopover>
          <NavMenuPopover
            variant={variant}
            menuId={"events-menu"}
            buttonLabel={"Events"}
            buttonId={"events-nav-button"}
          >
            <EventNavMenuItems />
          </NavMenuPopover>
          <NavMenuPopover
            variant={variant}
            menuId={"sponsor-menu"}
            buttonLabel={"Sponsors"}
            buttonId={"sponsor-nav-button"}
          >
            <SponsorNavMenuItems />
          </NavMenuPopover>
          <NonPopoverNavItem
            variant={variant}
            label="Merch"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/d/1xklzzmnqItOQTrWebtIDlzhENleiMcjl9xAfOhq5yR4/preview"
          />
          <NonPopoverNavItem
            variant={variant}
            label="Contact Us "
            href="#contact-us"
          />
        </Box>

        {/* Mobile Menu Component */}
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onToggle={handleMobileMenuToggle}
          onItemClick={handleMobileMenuItemClick}
          isRecruiting={isRecruiting}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
