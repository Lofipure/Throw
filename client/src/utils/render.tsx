import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';

import { THEME_COLOR } from '@/constants';

export const renderCustomHeader = (params?: { useThemeColor?: boolean }) => {
  const { useThemeColor = true } = params ?? {};
  return (
    <View
      style={{
        height: (Taro.getWindowInfo().statusBarHeight ?? 0) + 1,
        backgroundColor: useThemeColor ? THEME_COLOR : undefined,
      }}
      className="customer-header"
    />
  );
};
