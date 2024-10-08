// Package Imports
import React, { Children, isValidElement, cloneElement } from "react";
import { Menu, Button, Typography, useTheme } from "@mui/material";

// Icon Imports
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropUp";

// Project-defined Imports
import { usePopoverHook } from "./usePopoverHook";

export const NavMenuPopover = ({
  variant,
  children,
  menuId,
  buttonId,
  buttonLabel,
}) => {
  const theme = useTheme();
  const { anchorEl, open, handleClick, handleClose } = usePopoverHook();

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript error too.
    if (isValidElement(child)) {
      return cloneElement(child, { handleClose });
    }
    return child;
  });

  return (
    <>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          padding: theme.spacing(1, 1.5),
          textTransform: "none",
          color: theme.palette.white.secondary,
          "& .MuiButton-endIcon": {
            marginLeft: 0,
          },
          "&:hover": {
            backgroundColor: theme.palette.blue.hover,
          },
        }}
        classes={{ endIcon: { marginLeft: 0 } }}
      >
        <Typography variant={variant}>{buttonLabel}</Typography>
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": buttonId,
        }}
        sx={{
          boxShadow: theme.shadows[0].boxShadow,
          "& .MuiList-root": {
            padding: 0,
          },
        }}
      >
        {childrenWithProps}
      </Menu>
    </>
  );
};

export default NavMenuPopover;
