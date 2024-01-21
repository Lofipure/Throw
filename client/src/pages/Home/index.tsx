import { View, Image, Text } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import classNames from "classnames";
import { AtButton } from "taro-ui";
import logo from "../../assets/images/logo_white.png";
import "./index.less";
import { useState } from "react";
import { initDrinkList } from "../../utils/drinks";
import Loading from "../../components/Loading";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleNavigateToHelp = () => {
    Taro.navigateTo({
      url: "/pages/Help/index",
    });
  };

  const getAllDrinks = async () => {
    setLoading(true);
    await initDrinkList();
    setLoading(false);
  };

  useLoad(() => {
    getAllDrinks();
  });

  return loading ? (
    <Loading />
  ) : (
    <View className="index-page">
      <View className="index-page__banner">
        <Image src={logo} className="image" />
      </View>
      <View className="index-page__btn-group">
        <AtButton type="primary" onClick={handleNavigateToList} className="btn">
          {`🍹 new Object()`}
        </AtButton>
        <AtButton
          onClick={handleNavigateToRandom}
          className={classNames("btn", "normal-btn")}
        >
          {`🎁 Math.random()`}
        </AtButton>
      </View>

      <View className="index-page__help-text" onClick={handleNavigateToHelp}>
        <Text>{`// 🤝 Help + Q&A`}</Text>
      </View>
    </View>
  );
}
