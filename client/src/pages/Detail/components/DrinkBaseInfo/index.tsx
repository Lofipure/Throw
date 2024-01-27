import { FC, Fragment } from 'react';

import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtIcon, AtRate, AtTag } from 'taro-ui';
import { IDrink } from 'types';

import './index.less';

interface IDrinkBaseInfoProps {
  drink: IDrink;
}

const DrinkBaseInfo: FC<IDrinkBaseInfoProps> = ({ drink }) => (
  <Fragment>
    <View className="base-info__info">
      <View className="title">
        <Text className="title__content">{drink.name}</Text>
        {drink.is_spec ? <AtIcon value="star-2" className="title__icon" /> : null}
      </View>
      <View className="desc">
        <Text>{drink.desc}</Text>
      </View>
      <View className="tag-list">
        {drink.tags.map((tag) => (
          <AtTag className="tag">{tag}</AtTag>
        ))}
      </View>
    </View>
    <View className="base-info__attr">
      <View className="attr-item">
        <View className="attr-item__label">🥵 好喝不?</View>
        <AtRate className="attr-item__value" max={5} value={drink.attr.taste} />
      </View>
      <View className="attr-item">
        <View className="attr-item__label">😍 好看不?</View>
        <AtRate className="attr-item__value" max={5} value={drink.attr.beauty} />
      </View>
      <View className="attr-item">
        <View className="attr-item__label">🤤 上头不?</View>
        <AtRate className="attr-item__value" max={5} value={drink.attr.alcohol} />
      </View>
    </View>
    <View className="base-info__steps">
      <View className="step-title">
        <Text>🤪 咋做捏～</Text>
      </View>
      {drink.steps.map((step, index) => (
        <View key={index} className="step-item">
          <Text>{step}</Text>
        </View>
      ))}
    </View>
  </Fragment>
);

export default DrinkBaseInfo;
