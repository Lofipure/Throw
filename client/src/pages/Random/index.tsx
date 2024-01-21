import { View, Text } from "@tarojs/components";
import { renderCustomHeader } from "../../utils/render";
import { AtIcon, AtNavBar } from "taro-ui";
import "./index.less";
import Taro from "@tarojs/taro";

export default function Random() {
  const gotoHome = () => {
    Taro.navigateBack();
  };
  return (
    <View className="random-page">
      {renderCustomHeader()}
      <View className="random-page__navbar">
        <AtIcon
          value="chevron-left"
          onClick={gotoHome}
          className="icon"
        ></AtIcon>
        <Text className="title">{`🎲 Math.random()`}</Text>
      </View>
      <View className="random-page__content">盲盒害妹开始写，别急嗷。</View>
    </View>
  );
}
