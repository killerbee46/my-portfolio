import { colors } from "./colors";
import { ThemeConfig } from "antd";

export const themeConfig:ThemeConfig={
    token: {
        colorPrimary:colors?.primary,
    },
    components: {
        Button: {
          fontWeight:600,
          fontWeightStrong:600
        },
      },
  }