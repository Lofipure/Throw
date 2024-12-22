import { useMemo, useRef, useState } from 'react';

import { Image, Text, View } from '@tarojs/components';
import { TaroElement } from '@tarojs/runtime';
import Taro, { useLoad } from '@tarojs/taro';
import { AtButton, AtIcon } from 'taro-ui';
import { IDrink } from 'types';

import logo from '@/assets/images/logo.png';
import logoBlack from '@/assets/images/logo_black.png';
import { getDrinkImage, getDrinkList } from '@/utils/drinks';
import { renderCustomHeader } from '@/utils/render';

import './index.less';

type AnimateActions = {
  actions: TaroGeneral.IAnyObject[];
};

const animateGen = Taro.createAnimation({
  duration: 800,
  timingFunction: 'linear',
});

export default function Random() {
  const [drinkList, setDrinkList] = useState<IDrink[]>([]);
  const [randomDrink, setRandomDrink] = useState<IDrink | undefined>(undefined);
  const [animate, setAnimate] = useState<AnimateActions>(animateGen.rotateY(0).step().export());
  const [backAnimate, setBackAnimate] = useState<AnimateActions>(animateGen.rotateY(-180).step().export());

  const rotateDeg = useRef<number>(0);

  const groupEleRef = useRef<TaroElement>();

  const gotoHome = () => {
    Taro.navigateBack();
  };

  const getRandom = () => {
    const drink = drinkList[Math.floor(Math.random() * drinkList.length)];
    setRandomDrink(drink);
  };

  const triggerAnimate = () => {
    const curAnimate = animateGen
      .rotateY(rotateDeg.current + 360)
      .step()
      .export();
    setAnimate(curAnimate);

    const curBackAnimate = animateGen
      .rotateY(rotateDeg.current + 180)
      .step()
      .export();
    setBackAnimate(curBackAnimate);

    rotateDeg.current = rotateDeg.current + 360;
  };

  const handleNextTick = () => {
    triggerAnimate();
    setTimeout(getRandom, 350);
  };

  const handleConfirm = () => {
    if (!randomDrink) return;
    Taro.navigateTo({
      url: `/pages/Detail/index?id=${randomDrink._id}`,
    });
  };

  const drinkCard = useMemo(() => {
    if (!randomDrink) {
      return (
        <View className="card start" animation={animate}>
          <Image src={logoBlack} mode="widthFix" className="start__cover" />
          <AtButton onClick={handleNextTick} className="start__btn" type="primary">
            🫨 随机来一杯
          </AtButton>
        </View>
      );
    }
    const { name, cover, desc } = randomDrink;

    return (
      <View className="card drink" animation={animate}>
        <View className="card__content">
          <Image className="card__image" src={getDrinkImage(cover)} mode="widthFix" />
          <Text className="card__name">{name}</Text>
          <Text className="card__desc">{desc.slice(0, -1)}</Text>
        </View>
        <View className="card__btn-group">
          <AtButton type="primary" className="card__btn" onClick={handleConfirm}>
            😘 就这杯了!
          </AtButton>
          <AtButton type="secondary" className="card__btn" onClick={handleNextTick}>
            🙄 不感兴趣?下一杯!
          </AtButton>
        </View>
      </View>
    );
  }, [randomDrink, animate, drinkList]);

  const backCard = useMemo(
    () => (
      <View className="card back" animation={backAnimate}>
        <Image src={logo} mode="widthFix" />
      </View>
    ),
    [backAnimate],
  );

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
          {backCard}
          {drinkCard}
        </View>
      </View>
    </View>
  );
}
