import Taro, { useLoad } from "@tarojs/taro";
import { AtButton, AtIcon, AtModal, AtTag } from "taro-ui";
import { Image, View, Text } from "@tarojs/components";
import "./index.less";
import { AtRate } from "taro-ui";
import { renderCustomHeader } from "../../utils/render";
import { Fragment, useMemo, useState } from "react";
import { IDrink } from "types";
import { getDrinkList } from "../../utils/drinks";
import { URLSearchParams } from "@tarojs/runtime";
import Loading from "../../components/Loading";

export default function Detail() {
  const [drinkDetail, setDrinkDetail] = useState<IDrink | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const gotoList = () => {
    Taro.navigateBack();
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  useLoad(() => {
    const id = new URLSearchParams(location.search).get("id");
    if (id) {
      const drink = getDrinkList().find((item) => item._id === id);
      setDrinkDetail(drink);
    }
  });

  const content = useMemo(
    () =>
      drinkDetail ? (
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
                <AtTag className="tag">{tag}</AtTag>
              ))}
            </View>
          </View>
          <View className="detail-page__attr">
            <View className="attr-item">
              <View className="attr-item__label">🥵 好喝不?</View>
              <AtRate
                className="attr-item__value"
                max={5}
                value={drinkDetail.attr.taste}
              />
            </View>
            <View className="attr-item">
              <View className="attr-item__label">😍 好看不?</View>
              <AtRate
                className="attr-item__value"
                max={5}
                value={drinkDetail.attr.beauty}
              />
            </View>
            <View className="attr-item">
              <View className="attr-item__label">🤤 上头不?</View>
              <AtRate
                className="attr-item__value"
                max={5}
                value={drinkDetail.attr.alcohol}
              />
            </View>
          </View>
          <View className="detail-page__steps">
            <View className="step-title">
              <Text>🤪 咋做捏～</Text>
            </View>
            {drinkDetail.steps.map((step, index) => (
              <View key={index} className="step-item">
                <Text>{step}</Text>
              </View>
            ))}
          </View>
          <View className="detail-page__operate">
            <AtButton type="primary" className="btn" onClick={handleSubmit}>
              🙋 我想喝我想喝
            </AtButton>
          </View>
        </Fragment>
      ) : (
        <Loading></Loading>
      ),
    [drinkDetail]
  );

  return (
    <View className="detail-page">
      {content}
      <AtModal
        isOpened={open}
        confirmText="确认"
        onConfirm={() => setOpen(false)}
        content="下单成功，请轻轻拍打身旁的王子恒。"
      ></AtModal>
    </View>
  );
}
