import { PropsWithChildren } from "react";
import "taro-ui/dist/style/index.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./app.less";
import Taro from "@tarojs/taro";

Taro.cloud.init();

function App({ children }: PropsWithChildren<any>) {
  return children;
}

export default App;
