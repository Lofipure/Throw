import { FC, PropsWithChildren } from 'react';

import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { AtActivityIndicator } from 'taro-ui';

import { THEME_COLOR } from '@/constants';

import './index.less';

interface IWrapLoadingProps extends PropsWithChildren {
  size?: number;
  loading?: boolean;
}

const WrapLoading: FC<IWrapLoadingProps> = (props) => {
  const { size, loading, children } = props;

  return (
    <View className="wrap-loading">
      <View
        className={classNames('wrap-loading__wrap', {
          'wrap-loading__wrap-hide': !loading,
        })}
      >
        {loading ? <AtActivityIndicator color={THEME_COLOR} mode="center" size={size} className="wrap-loading__loading" /> : null}
      </View>
      {children}
    </View>
  );
};

export default WrapLoading;
