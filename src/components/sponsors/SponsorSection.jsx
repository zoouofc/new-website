// Package Imports
import { Typography, useTheme, Container } from "@mui/material";

// Project-defined Components
import { StyledButton } from "../buttons/StyledButton";

export const SponsorSection = () => {
  const theme = useTheme();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container maxWidth="md" style={{ margin: theme.spacing(6, 0, 7) }}>
        <Typography variant="h4" id="become-sponsor">
          Become a Sponsor
        </Typography>
        <Typography variant="body1" paragraph>
          Over the past few years, there has been significant growth in the
          students enrolling into Software and Electrical Engineering.
          Therefore, as the Electrical and Software Engineering Students'
          Society, it is our goal to ensure that the students are provided with
          the necessary resources to succeed in and out of the classroom.
          Ensuring a smooth transition from Post-Secondary to Industry is
          crucial, as ZOO students are poised to be the the technological
          front-runners in Calgary and the rest of the world.
        </Typography>
        <Typography variant="body1" paragraph>
          To be able to achieve our goal of providing for our students, we
          require assistance from partners and sponsors! If you're interested in
          what we have available, please check one of the packages below.{" "}
          <b>
            Please note that our team is very accommodating and willing to
            entertain any discussions on custom sponsorship requests.
          </b>
        </Typography>
        <div
          style={{
            margin: theme.spacing(5, 0, 0),
          }}
        >
          <StyledButton href="#">Financial Sponsorship Package</StyledButton>
        </div>
      </Container>
    </div>
  );
};
