// Package Imports
import React from "react";
import { Button, useTheme } from "@mui/material";

export const StyledButton = ({ children }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        justifyContent: "end",
        color: theme.palette.button.font,
        background: theme.palette.button.primary,
        borderRadius: theme.shape.borderRadius,
        boxShadow: ` 0 4px 8px 0 rgba(0, 0, 0, 0.2)`,
        ":hover": {
          background: theme.palette.button.secondary,
          boxShadow: "none",
        },
      }}
      variant="filled"
    >
      {children}
    </Button>
  );
};
