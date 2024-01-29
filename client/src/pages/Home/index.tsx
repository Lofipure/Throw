import { useState } from 'react';

import { Image, Text, View } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import classNames from 'classnames';
import { AtButton } from 'taro-ui';

import logo from '@/assets/images/logo_white.png';
import WrapLoading from '@/components/WrapLoading';
import { initDrinkList } from '@/utils/drinks';
import { initOpenId } from '@/utils/userInfo';

import './index.less';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleNavigateToList = () => {
    Taro.navigateTo({
      url: '/pages/List/index',
    });
  };

  const handleNavigateToRandom = () => {
    Taro.navigateTo({
      url: '/pages/Random/index',
    });
  };

  const handleNavigateToHelp = () => {
    Taro.navigateTo({
      url: '/pages/Help/index',
    });
  };

  useLoad(async () => {
    setLoading(true);
    await Promise.all([initDrinkList(), initOpenId()]);
    setLoading(false);
  });

  return (
    <WrapLoading loading={loading}>
      <View className="index-page">
        <View className="index-page__banner">
          <Image src={logo} className="image" mode="widthFix" />
        </View>
        <View className="index-page__btn-group">
          <AtButton type="primary" onClick={handleNavigateToList} className="btn">
            {`🍹 new Object()`}
          </AtButton>
          <AtButton onClick={handleNavigateToRandom} className={classNames('btn', 'normal-btn')}>
            {`🎁 Math.random()`}
          </AtButton>
        </View>
        <View className="index-page__help-text" onClick={handleNavigateToHelp}>
          <Text>{`// 🤝 Help + Q&A`}</Text>
        </View>
      </View>
    </WrapLoading>
  );
}
