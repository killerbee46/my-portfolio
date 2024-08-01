import { colors } from "./colors";
import { ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: colors?.primary,
  },
  components: {
    Card: {
    },
    Button: {
      fontWeight: 600,
      fontWeightStrong: 600
    },
    Breadcrumb: {
      linkColor: colors?.primary,
      linkHoverColor: colors?.background,
      separatorColor: colors?.background,
      separatorMargin: 10,
      lastItemColor: colors?.background,
      iconFontSize: 24
    },
    Input: {
      colorBgContainer: colors.foreground,
      colorBorder: colors.foreground,
      activeBorderColor: colors?.primary,
      colorText: colors?.background,
      borderRadius: 50,
      colorTextPlaceholder: 'grey',
    },
    Timeline:{
      dotBg:colors?.primary,
      tailColor:colors?.primary
    }
  },
}