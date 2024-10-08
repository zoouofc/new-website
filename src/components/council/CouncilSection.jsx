// Package Imports
import React from "react";
import { Typography, Box, Button, useTheme } from "@mui/material";

// Project-defined Imports
import { ExecSubSection } from "./execs/ExecSubSection";
import { CommSubSection } from "./comms/CommSubSection";

export const CouncilSection = ({ isRecruiting }) => {
  const theme = useTheme();

  return (
    <div style={{ background: theme.palette.white.secondary, padding: 0 }}>
      <ExecSubSection />
      <CommSubSection />
      {isRecruiting && (
        <Box id="join-team" sx={{ textAlign: "right" }}>
          <div
            style={{
              display: "flex",
              alignContent: "end",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ padding: theme.spacing(5, 0, 3), width: "50%" }}
            >
              <b>If you're interested in joining ZOO</b> as one of the above
              roles, click the button to download our form and submit it to
              <a href={`mailto:execs@zooengg.ca`}>execs@zooengg.ca</a> to apply!
            </Typography>
            <Button sx={{ justifyContent: "end" }} variant="filled">
              Download
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};
