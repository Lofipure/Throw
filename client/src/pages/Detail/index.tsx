import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtNavBar } from "taro-ui";
import "./index.less";
import { renderCustomHeader } from "../../utils/render";

export default function Detail() {
  const gotoList = () => {
    Taro.switchTab({
      url: "/pages/List/index",
    });
  };
  return (
    <View className="detail-page">
      {renderCustomHeader()}
      <AtNavBar
        leftText="返回"
        leftIconType="chevron-left"
        color="#fff"
        className="detail-page__navbar"
        onClickLeftIcon={gotoList}
      />
    </View>
  );
}
