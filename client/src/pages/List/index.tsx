import { FC } from "react";
import { View, Text, Image } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import { AtNavBar } from "taro-ui";
import { renderCustomHeader } from "../../utils/render";
import "./index.less";

const List: FC = () => {
  const gotoHome = () => {
    Taro.navigateBack();
  };

  return (
    <View className="list-page">
      {renderCustomHeader()}
      <AtNavBar
        leftIconType="chevron-left"
        color="#fff"
        className="list-page__navbar"
        onClickLeftIcon={gotoHome}
        title="选酒"
      />
      <View className="list-page__list"></View>
    </View>
  );
};

export default List;
