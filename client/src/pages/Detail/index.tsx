import Taro, { useLoad } from "@tarojs/taro";
import { AtIcon, AtTag } from "taro-ui";
import { Image, View, Text } from "@tarojs/components";
import "./index.less";
import { renderCustomHeader } from "../../utils/render";
import { Fragment, useState } from "react";
import { IDrink } from "types";
import { getDrinkList } from "../../utils/drinks";
import { URLSearchParams } from "@tarojs/runtime";
import Loading from "../../components/Loading";

export default function Detail() {
  const [drinkDetail, setDrinkDetail] = useState<IDrink | undefined>(undefined);

  const gotoList = () => {
    Taro.navigateBack();
  };

  useLoad(() => {
    const id = new URLSearchParams(location.search).get("id");
    if (id) {
      const drink = getDrinkList().find((item) => item._id === id);
      setDrinkDetail(drink);
    }
  });

  return (
    <View className="detail-page">
      {drinkDetail ? (
        <Fragment>
          <View className="detail-page__banner">
            <View className="detail-page__header">
              {renderCustomHeader({
                useThemeColor: false,
              })}
              <AtIcon
                value="chevron-left"
                onClick={gotoList}
                className="detail-page__nav-icon"
              />
            </View>
            <Image
              src={drinkDetail.cover}
              mode="widthFix"
              className="detail-page__cover"
            />
          </View>
          <View className="detail-page__info">
            <View className="title">
              <Text className="title__content">{drinkDetail.name}</Text>
              {drinkDetail.is_spec ? (
                <AtIcon value="star-2" className="title__icon" />
              ) : null}
            </View>
            <View className="desc">
              <Text>{drinkDetail.desc}</Text>
            </View>
            <View className="tag-list">
              {drinkDetail.tags.map((tag) => (
                <AtTag>{tag}</AtTag>
              ))}
            </View>
          </View>
        </Fragment>
      ) : (
        <Loading />
      )}
    </View>
  );
}
