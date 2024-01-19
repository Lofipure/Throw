import Taro from "@tarojs/taro";

export const getLogin = async () => {
  return await Taro.cloud.callFunction({
    name: "123",
    data: {},
  });
};
