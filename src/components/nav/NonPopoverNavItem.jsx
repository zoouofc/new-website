// Package Imports
import React from "react";
import { Typography, useTheme } from "@mui/material";

export const NonPopoverNavItem = ({ href, label, ...props }) => {
  const theme = useTheme();
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        color: theme.palette.white.secondary,
      }}
      {...props}
    >
      <Typography
        variant="body1"
        sx={{
          padding: theme.spacing(1, 2),
          alignContent: "center",
          borderRadius: theme.spacing(1.25),
          "&:hover": {
            backgroundColor: theme.palette.blue.hover,
          },
        }}
      >
        {label}
      </Typography>
    </a>
  );
};

export default NonPopoverNavItem;
