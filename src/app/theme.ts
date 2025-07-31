import { createTheme, rem } from "@mantine/core";

const theme = createTheme({
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
    xxl: "118em",
  },
  fontSizes: {
    xxs: rem(14),
    xs: rem(16),
    sm: rem(20),
    md: rem(24),
    lg: rem(28),
    xl: rem(32)
  },
  white: "#fff",
  colors: {

    brand: [
      "#fff",
      "#e6f7ff",
      "#bae7ff",
      "#91d5ff",
      "#69c0ff",
      "#40a9ff",
      "#1890ff",
      "#096dd9",
      "#0050b3",
      "#003a8c",
      "#002766",
    ],
  },
  headings: {
    fontFamily: 'Circular PRTCL',
    fontWeight: "normal",
    textWrap: "wrap",
    sizes: {
      h1: {
        fontWeight: "400",
        fontSize: "100px",
        lineHeight: "110%"

      },
      h2: {
        fontWeight: "400",
        fontSize: "60px"
      },
      h3: {
        fontWeight: "600",
        fontSize: "32"
      },
      h4: {
        fontWeight: "600",
        fontSize: "32"
      },
      h5: {
        fontWeight: "600",
        fontSize: "32"
      },
      h6: {
        fontWeight: "600",
        fontSize: "32"
      },
    }
  },
  fontFamily: 'InterVariable',

});

export default theme;
