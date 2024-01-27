import Taro from '@tarojs/taro';
import { IDrink } from 'types';

import { DRINKS_LIST_KEY } from '@/constants';
import { services } from '@/services';

export const initDrinkList = async () => {
  const result = (await services.getDrinks()) as any;

  const drinkList = result?.data as IDrink[];

  // 给图片添加缓存，避免图片过大导致短暂加载不出来的情况
  await Promise.all(
    drinkList.map(
      (item) =>
        new Promise<void>(async (resolve) => {
          if (Taro.getStorageSync(item.cover)) {
            resolve();
            return;
          }
          Taro.downloadFile({
            url: item.cover,
            success: (result) => {
              const fs = Taro.getFileSystemManager();
              fs.saveFile({
                tempFilePath: result.tempFilePath,
                success: (res) => {
                  Taro.setStorageSync(item.cover, res.savedFilePath);
                  resolve();
                },
              });
            },
          });
        }),
    ),
  );

  Taro.setStorageSync(DRINKS_LIST_KEY, JSON.stringify(drinkList));
};

export const getDrinkList = () => JSON.parse(Taro.getStorageSync(DRINKS_LIST_KEY)) as IDrink[];

export const getDrinkImage = (url: string) => Taro.getStorageSync(url) ?? url;
