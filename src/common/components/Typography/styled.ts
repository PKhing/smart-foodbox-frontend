import {styled} from "config/stitches.config";

export const StyledTypography = styled("div", {
  fontFamily: "$IBMPlexSans",
  color: "$primary700",
  variants: {
    variant: {
      h1: {
        fontWeight: "700",
        fontSize: "2rem",
      },
      h2: {
        fontWeight: "600",
        fontSize: "1.5rem",
      },
      h3: {
        fontWeight: "500",
        fontSize: "1.25rem",
      },
      body1: {
        fontWeight: "500",
        fontSize: "1rem",
      },
      body2: {
        fontWeight: "400",
        fontSize: "0.875rem",
      },
    },
  },
  defaultVariants: {
    variant: "body1",
  },
});
