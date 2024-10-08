// TODO: Add the ZOO easter egg by clicking on the avatar

// Package Imports
import React from "react";
import { AppBar, Toolbar, CssBaseline, useTheme, Avatar } from "@mui/material";

// Project-defined Imports
import {
  CouncilNavMenuItems,
  EventNavMenuItems,
  SponsorNavMenuItems,
} from "./menu-items";
import NonPopoverNavItem from "./NonPopoverNavItem";
import NavMenuPopover from "./popover/NavMenuPopover";

// Images
import ZooLogo from "../../assets/ZooLogo.svg";

export const Navbar = ({ id, isRecruiting }) => {
  const theme = useTheme();
  const variant = "body1";

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
        <div style={{ display: "flex" }}>
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
            label="Contact Us "
            href="#contact-us"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
