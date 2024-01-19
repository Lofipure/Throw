import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import classNames from "classnames";
import { AtButton } from "taro-ui";
// import logo from "@/assets/images/logo_2.png";
import logo from '../../assets/images/logo_2.png';
import "./index.less";

export default function Home() {
  const handleNavigateToList = () => {
    Taro.navigateTo({
      url: "/pages/List/index",
    });
  };

  const handleNavigateToRandom = () => {
    Taro.navigateTo({
      url: "/pages/Random/index",
    });
  };

  return (
    <View className="index-page">
      <View className="index-page__banner">
        <Image src={logo} className="image" />
      </View>
      <View className="index-page__btn-group">
        <AtButton type="primary" onClick={handleNavigateToList} className="btn">
          🍹 喝点儿？
        </AtButton>
        <AtButton
          onClick={handleNavigateToRandom}
          className={classNames("btn", "normal-ben")}
        >
          🎁 开盲盒？
        </AtButton>
      </View>
    </View>
  );
}
