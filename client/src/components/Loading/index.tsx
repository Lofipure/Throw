import { FC } from 'react';

import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';

import { THEME_COLOR } from '@/constants';

interface ILoadingProps {
  size?: number;
}
const Loading: FC<ILoadingProps> = ({ size = 50 }) => {
  return (
    <View>
      <AtActivityIndicator mode="center" color={THEME_COLOR} size={size} />
    </View>
  );
};

export default Loading;
