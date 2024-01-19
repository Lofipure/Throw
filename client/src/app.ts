import { PropsWithChildren } from "react";
import "taro-ui/dist/style/index.scss";
import "taro-ui/dist/style/components/icon.scss";
import "./app.less";
import Taro, { useLoad } from "@tarojs/taro";

function App({ children }: PropsWithChildren<any>) {
  useLoad(() => {
    Taro.cloud.init();
  });
  return children;
}

export default App;
