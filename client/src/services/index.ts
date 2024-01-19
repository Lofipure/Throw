import Taro from "@tarojs/taro";

export const getDrinks = async (params?: Record<string, any>) =>
  await Taro.cloud.callFunction({
    name: "getDrinks",
    data: params,
  });
