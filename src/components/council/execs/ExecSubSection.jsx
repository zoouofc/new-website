//TODO: Update mobile styling to increase width of description text (60%/70% width instead)

// Package Imports
import React from "react";
import { useTheme, Typography } from "@mui/material";
import { isEmpty } from "lodash";

// Project-defined Imports
import { execInfo } from "../CouncilInfo";
import { RightExecBioCard } from "./RightExecBioCard";
import { LeftExecBioCard } from "./LeftExecBioCard";

export const ExecSubSection = () => {
  const theme = useTheme();

  return (
    <div style={{ margin: theme.spacing(0, 0, 5) }}>
      <Typography variant="h4" id="exec-council" sx={{ textAlign: "right" }}>
        Executive Council
      </Typography>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", textAlign: "right", width: "50%" }}
        >
          Meet the leaders of today working to make things happen for all the
          Electrical, Software, and Computer Engineering students!
        </Typography>
      </div>

      {/* Renders the multiple exec components */}
      {execInfo.map((exec, index) => {
        const isBioPresent = !isEmpty(exec.execBio);

        if (index % 2) {
          return (
            <RightExecBioCard
              key={index}
              bio={exec.execBio}
              email={exec.execEmail}
              name={exec.execName}
              position={exec.execPosition}
              image={exec.image}
              isBioPresent={isBioPresent}
            />
          );
        } else {
          return (
            <LeftExecBioCard
              key={index}
              bio={exec.execBio}
              email={exec.execEmail}
              name={exec.execName}
              position={exec.execPosition}
              image={exec.image}
              isBioPresent={isBioPresent}
            />
          );
        }
      })}
    </div>
  );
};
