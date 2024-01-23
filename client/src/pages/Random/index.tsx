import { useRef, useState } from 'react';

import { Image, Text, View } from '@tarojs/components';
import { TaroElement } from '@tarojs/runtime';
import Taro, { useLoad } from '@tarojs/taro';
import { AtButton, AtIcon } from 'taro-ui';
import { IDrink } from 'types';

import { getDrinkImage, getDrinkList } from '@/utils/drinks';
import { renderCustomHeader } from '@/utils/render';

import './index.less';

export default function Random() {
  const [drinkList, setDrinkList] = useState<IDrink[]>([]);
  const [randomDrink, setRandomDrink] = useState<IDrink | undefined>(undefined);

  const groupEleRef = useRef<TaroElement>();

  const gotoHome = () => {
    Taro.navigateBack();
  };

  const getRandom = () => {
    const drink = drinkList[Math.floor(Math.random() * drinkList.length)];
    setRandomDrink(drink);
  };

  const triggerAnimate = () => {
    // @ts-ignore
    groupEleRef.current?.classList.toggle('flip');
  };

  const getDrinkRenderCard = (params: { drink?: IDrink; type: 'front' | 'back' }) => {
    const { drink, type } = params;
    if (!drink) {
      return (
        <View className={`card ${type}`} onClick={getRandom}>
          <AtButton onClick={getRandom} type="primary">
            来一杯
          </AtButton>
        </View>
      );
    }

    const { name, cover, desc, tags, attr } = drink;

    return (
      <View className={`card ${type}`}>
        <View className="card__content">
          <Image src={getDrinkImage(cover)} mode="widthFix" />
        </View>
        <AtButton
          type="primary"
          className="card__btn"
          onClick={() => {
            triggerAnimate();
            setTimeout(getRandom, 400);
          }}
        >
          🙄 不感兴趣?再试试!
        </AtButton>
      </View>
    );
  };

  useLoad(() => {
    setDrinkList(getDrinkList());
  });

  return (
    <View className="random-page">
      {renderCustomHeader()}
      <View className="random-page__navbar">
        <AtIcon value="chevron-left" onClick={gotoHome} className="icon"></AtIcon>
        <Text className="title">{`🎲 Math.random()`}</Text>
      </View>
      <View className="random-page__content">
        <View className="card-container" ref={groupEleRef}>
          {getDrinkRenderCard({ drink: randomDrink, type: 'front' })}
          {getDrinkRenderCard({ drink: randomDrink, type: 'back' })}
        </View>
      </View>
    </View>
  );
}
