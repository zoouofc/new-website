// Component that has image and bio description from each exec
// pass in image, email, role name, and pass in text (name, bio)

// Package Imports
import React from "react";
import { useTheme, Grid, Typography, Avatar } from "@mui/material";

// Icon Imports
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

export const RightExecBioCard = ({ bio, email, name, position, image }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        flexFlow: "row",
        textAlign: "right",
        padding: theme.spacing(2, 0),
      }}
    >
      <Grid item size="grow">
        <Typography variant="h6" sx={{ lineHeight: 1 }}>
          {name}
        </Typography>
        <Typography variant="subtitle1">{position}</Typography>
        <Typography variant="body1" sx={{ padding: theme.spacing(1.5, 0, 0) }}>
          {bio}
        </Typography>
      </Grid>
      <Grid item sx={{ padding: theme.spacing(0, 0, 0, 2) }}>
        <Avatar
          src={image}
          alt={`${position}_role`}
          sx={{ width: 200, height: 200, boxShadow: theme.shadows[5] }}
        />
        <Avatar
          sx={{
            position: "relative",
            left: 0,
            bottom: theme.spacing(6.25),
            width: theme.spacing(7),
            height: theme.spacing(7),
            bgcolor: theme.palette.text.primary,
          }}
        >
          <a href={`mailto:${email}`}>
            <MarkunreadRoundedIcon
              sx={{
                width: theme.spacing(4.5),
                height: theme.spacing(4.5),
                color: '#fff'
              }}
            />
          </a>
        </Avatar>
      </Grid>
    </Grid>
  );
};
