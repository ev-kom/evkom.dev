"use client";

import React from "react";

const LinkedInLogo = (props: object) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      shapeRendering="crispEdges"
      viewBox="0 -0.5 32 32"
      {...props}
    >
      <image
        href="/linkedin_logo_pixelated_32px.webp"
        x="0"
        y="0"
        width="32"
        height="32"
      />
    </svg>
  );
};

LinkedInLogo.displayName = "LinkedInLogo";

export default LinkedInLogo;
