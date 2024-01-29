import Taro from '@tarojs/taro';

import { OPEN_ID_KEY } from '@/constants';
import { services } from '@/services';

export const initOpenId = async () => {
  const res = (await services.getUserOpenId()) as any;
  Taro.setStorageSync(OPEN_ID_KEY, res?.data?.open_id);
};
