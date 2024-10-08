// Package Imports
import React from "react";

// Project-defined Imports
import NavMenuItem from "./NavMenuItem";

export const SponsorNavMenuItems = ({ handleClose }) => (
  <>
    <NavMenuItem
      handleClose={handleClose}
      href={"#become-sponsor"}
      label="Become a Sponsor"
    />
    <NavMenuItem
      handleClose={handleClose}
      href={"#sponsors"}
      label="Our Sponsors"
    />
  </>
);

export default SponsorNavMenuItems;
