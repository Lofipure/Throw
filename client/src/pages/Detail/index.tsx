import { Fragment, useState } from 'react';

import { Image, View } from '@tarojs/components';
import { URLSearchParams } from '@tarojs/runtime';
import Taro, { useLoad } from '@tarojs/taro';
import { AtButton, AtIcon, AtModal } from 'taro-ui';
import { IDrink } from 'types';

import Loading from '@/components/Loading';
import { getDrinkImage, getDrinkList } from '@/utils/drinks';
import { renderCustomHeader } from '@/utils/render';

import DrinkBaseInfo from './components/DrinkBaseInfo';

import './index.less';

export default function Detail() {
  const [drinkDetail, setDrinkDetail] = useState<IDrink | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const gotoList = () => {
    Taro.navigateBack();
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  useLoad(async () => {
    const id = new URLSearchParams(location.search).get('id');
    if (id) {
      const drink = getDrinkList().find((item) => item._id === id);
      setDrinkDetail(drink);
    }
  });

  return (
    <View className="detail-page">
      {drinkDetail ? (
        <Fragment>
          <View className="detail-page__banner">
            <View className="detail-page__header">
              {renderCustomHeader({
                useThemeColor: false,
              })}
              <AtIcon value="chevron-left" onClick={gotoList} className="detail-page__nav-icon" />
            </View>
            <Image src={getDrinkImage(drinkDetail.cover)} mode="widthFix" className="detail-page__cover" />
          </View>
          <View className="detail-page__content">
            <DrinkBaseInfo drink={drinkDetail} />
          </View>
          <View className="detail-page__operate">
            <AtButton type="primary" className="btn" onClick={handleSubmit}>
              🙋 我想喝我想喝
            </AtButton>
          </View>
        </Fragment>
      ) : (
        <Loading />
      )}
      <AtModal isOpened={open} confirmText="确认" onConfirm={() => setOpen(false)} content="下单成功，请轻轻拍打身旁的王子恒。"></AtModal>
    </View>
  );
}
