import { View } from "@tarojs/components";
import { renderCustomHeader } from "../../utils/render";
import { AtNavBar } from "taro-ui";
import "./index.less";
import Taro from "@tarojs/taro";

export default function Random() {
  const gotoHome = () => {
    Taro.navigateBack();
  };
  return (
    <View className="random-page">
      {renderCustomHeader()}
      <AtNavBar
        leftIconType="chevron-left"
        color="#fff"
        className="random-page__navbar"
        onClickLeftIcon={gotoHome}
        title="盲盒"
      />
      <View className="random-page__content">
      🤔 盲盒功能还在开发中，敬请期待......
      </View>
    </View>
  );
}
