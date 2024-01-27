import Taro from '@tarojs/taro';

import { USER_INFO_KEY } from '@/constants';
import { services } from '@/services';

export const initUserInfo = async () => {
  const { userInfo } = await Taro.getUserInfo();
  console.log('[🔧 Debug 🔧]', 'userInfo', userInfo);
  const res = (await services.getUserOpenId()) as any;

  const info = Object.assign(userInfo, res?.data?.open_id ? { openId: res?.data?.open_id } : {});
  if (!res?.data?.open_id) {
    console.log('NO USER OPEN ID');
  }

  Taro.setStorageSync(USER_INFO_KEY, JSON.stringify({ ...info }));
};

export const getUserInfo = (): Taro.UserInfo & {
  openId: string;
} => JSON.parse(Taro.getStorageSync(USER_INFO_KEY));
