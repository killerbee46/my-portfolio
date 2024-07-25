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
        Breadcrumb: {
          linkColor:colors?.primary,
          linkHoverColor:colors?.background,
          separatorColor:colors?.background,
          separatorMargin:10,
          lastItemColor:colors?.background, 
          iconFontSize: 24
        },
      },
  }