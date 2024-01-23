import { FC, useState } from 'react';

import { Image, Text, View } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import { AtIcon, AtTag } from 'taro-ui';
import { IDrink } from 'types';

import { getDrinkImage, getDrinkList } from '@/utils/drinks';
import { renderCustomHeader } from '@/utils/render';

import './index.less';

const List: FC = () => {
  const [drinkList, setDrinkList] = useState<IDrink[]>([]);
  const gotoHome = () => {
    Taro.navigateBack();
  };

  const handleGotoDetail = (drink: IDrink) => {
    Taro.navigateTo({
      url: `/pages/Detail/index?id=${drink._id}`,
    });
  };

  useLoad(() => {
    setDrinkList(getDrinkList());
  });

  return (
    <View className="list-page">
      <View className="list-page__header">
        {renderCustomHeader({
          useThemeColor: false,
        })}
        <View className="list-page__navbar">
          <AtIcon value="chevron-left" onClick={gotoHome} className="icon"></AtIcon>
          <Text className="title">{`🤖 throw new Error('')`}</Text>
        </View>
      </View>
      <View className="list-page__list">
        {drinkList.map((item, index) => {
          const { cover, name, desc, tags, is_spec } = item;
          return (
            <View className="item" key={index} onClick={() => handleGotoDetail(item)}>
              <Image src={getDrinkImage(cover)} className="item__cover" mode="widthFix" fadeIn />
              <View className="item__content">
                <View className="title">
                  {name}
                  {is_spec ? <AtIcon value="star-2" className="icon" /> : null}
                </View>
                <View className="desc">{desc}</View>
                <View className="tag-list">
                  {tags.slice(0, 3).map((tag) => (
                    <AtTag key={`${tag}_${name}`} className="tag">
                      {tag}
                    </AtTag>
                  ))}
                  {tags?.length > 3 ? <AtTag>...</AtTag> : null}
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default List;
