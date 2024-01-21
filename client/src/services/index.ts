import Taro from "@tarojs/taro";

export const services = {
  getDrinks: async (params?: Record<string, any>) =>
    await Taro.cloud.callFunction({
      name: "getDrinks",
      data: params,
    }),
};
