import { FC } from 'react';

import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';

import { THEME_COLOR } from '@/constants';

const Loading: FC = () => {
  return (
    <View>
      <AtActivityIndicator mode="center" color={THEME_COLOR} size={50} />
    </View>
  );
};

export default Loading;
