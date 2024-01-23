import { THEME_COLOR } from './constants';

export default defineAppConfig({
  pages: ['pages/Home/index', 'pages/List/index', 'pages/Random/index', 'pages/Detail/index', 'pages/Help/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarTextStyle: 'white',
    navigationBarBackgroundColor: THEME_COLOR,
    navigationBarTitleText: 'PrincessTavern',
    navigationStyle: 'custom',
  },
  cloud: true,
});
