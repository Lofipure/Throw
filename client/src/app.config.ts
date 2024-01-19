import { THEME_COLOR } from "./constants";

export default defineAppConfig({
  pages: [
    "pages/Home/index",
    "pages/List/index",
    "pages/Detail/index",
    "pages/Random/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarTextStyle: "white",
    navigationBarBackgroundColor: THEME_COLOR,
    navigationBarTitleText: "PrincessTavern",
  },
  cloud: true,
});
