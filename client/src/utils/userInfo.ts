import { USER_INFO_KEY } from "@/constants";
import Taro from "@tarojs/taro";

export const initUserInfo = async () => {
  const { userInfo } = await Taro.getUserInfo();

  Taro.setStorageSync(USER_INFO_KEY, JSON.stringify(userInfo));
};

export const getUserInfo = (): Taro.UserInfo =>
  JSON.parse(Taro.getStorageSync(USER_INFO_KEY));
