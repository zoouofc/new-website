// Component that has image and bio description from each exec
// pass in image, email, role name, and pass in text (name, bio)

// Package Imports
import React from "react";
import { useTheme, Grid, Typography, Avatar } from "@mui/material";

// Icon Imports
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

export const LeftExecBioCard = ({ bio, email, name, position, image }) => {
  const theme = useTheme();

  return (
    <Grid container sx={{ padding: theme.spacing(2, 0), flexFlow: "row" }}>
      <Grid
        item
        sx={{ padding: theme.spacing(0, 2, 0, 0), alignContent: "center" }}
      >
        <Avatar
          src={image}
          alt={`${position}_role`}
          sx={{ width: 200, height: 200, boxShadow: theme.shadows[5] }}
        />
        <Avatar
          sx={{
            bgcolor: theme.palette.text.primary,
            position: "relative",
            left: theme.spacing(16),
            bottom: theme.spacing(6.25),
            width: theme.spacing(7),
            height: theme.spacing(7),
          }}
        >
          <a href={`mailto:${email}`}>
            <MarkunreadRoundedIcon
              sx={{
                color: "#fff",
                width: theme.spacing(4.5),
                height: theme.spacing(4.5),
                margin: theme.spacing(0.5, 0, 0),
              }}
            />
          </a>
        </Avatar>
      </Grid>
      <Grid item size={5}>
        <Typography variant="h6" sx={{ lineHeight: 1 }}>
          {name}
        </Typography>
        <Typography variant="subtitle1">{position}</Typography>
        <Typography variant="body1" sx={{ padding: theme.spacing(1.5, 0, 0) }}>
          {bio}
        </Typography>
      </Grid>
    </Grid>
  );
};
