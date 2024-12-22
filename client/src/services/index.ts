import Taro from '@tarojs/taro';

type IResp = {
  code: 0 | 1;
  data: any;
};
export const services = {
  getDrinks: async (data?: Record<string, any>): Promise<IResp> =>
    (
      await Taro.cloud.callFunction({
        name: 'getDrinks',
        data,
      })
    ).result as any,
  getUserOpenId: async (): Promise<IResp> =>
    (
      await Taro.cloud.callFunction({
        name: 'getUserOpenId',
      })
    ).result as any,
  createComment: async (data?: Record<string, any>): Promise<IResp> =>
    (
      await Taro.cloud.callFunction({
        name: 'createComment',
        data,
      })
    ).result as any,
  getComments: async (data?: Record<string, any>): Promise<IResp> =>
    (
      await Taro.cloud.callFunction({
        name: 'getComments',
        data,
      })
    ).result as any,
};
