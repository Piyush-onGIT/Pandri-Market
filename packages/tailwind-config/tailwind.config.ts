import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      fontFamily: {
        custom: ["fashion", "sans"],
      },
      screens: {
        xs: { raw: "(min-width: 410px)" },
      },
    },
  },
  plugins: [],
};
export default config;
