import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

export const renderCustomHeader = () => (
  <View
    style={{
      height: (Taro.getWindowInfo().statusBarHeight ?? 0) + 1,
    }}
    className="customer-header"
  />
);
