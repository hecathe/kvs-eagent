import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#F4691B",
          100: "#D75924",
          200: "#CD4A00",
          300: "#CB3809",
        },
      },
    },
  },
};
