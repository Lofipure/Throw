import { PropsWithChildren } from 'react';

import Taro from '@tarojs/taro';
import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/index.scss';

import './app.less';

Taro.cloud.init();

function App({ children }: PropsWithChildren<any>) {
  return children;
}

export default App;
