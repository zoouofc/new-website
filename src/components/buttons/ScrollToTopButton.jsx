// Package Imports
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Fade, Fab, useTheme } from "@mui/material";

// Icon Imports
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollToTopButton = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: theme.spacing(2), right: theme.spacing(2) }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

ScrollToTopButton.propTypes = {};
