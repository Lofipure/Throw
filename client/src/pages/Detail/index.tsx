import { Fragment, useState } from 'react';

import { Image, View } from '@tarojs/components';
import { URLSearchParams } from '@tarojs/runtime';
import Taro, { useLoad } from '@tarojs/taro';
import { AtButton, AtIcon, AtModal } from 'taro-ui';
import { IDrink } from 'types';

import Loading from '@/components/Loading';
import { getDrinkImage, getDrinkList } from '@/utils/drinks';
import { renderCustomHeader } from '@/utils/render';

// import { getUserInfo } from '@/utils/userInfo';
import DrinkBaseInfo from './components/DrinkBaseInfo';

import './index.less';

// const userInfo = getUserInfo();

export default function Detail() {
  // const [loading, setLoading] = useState<boolean>(false);
  const [drinkDetail, setDrinkDetail] = useState<IDrink | undefined>(undefined);
  // const [commentList, setCommentList] = useState<IComment[]>();
  // const [myComment, setMyComment] = useState<IComment | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const gotoList = () => {
    Taro.navigateBack();
  };

  const handleSubmit = () => {
    setOpen(true);
  };

  // const getComments = async (id: string): Promise<IComment[]> =>
  //   (
  //     await services.getComments({
  //       drinkId: id,
  //     })
  //   )?.data ?? [];

  useLoad(async () => {
    const id = new URLSearchParams(location.search).get('id');
    if (id) {
      const drink = getDrinkList().find((item) => item._id === id);
      setDrinkDetail(drink);
      // setLoading(true);
      // const drink = getDrinkList().find((item) => item._id === id);
      // setDrinkDetail(drink);

      // const list = (await getComments(id)).filter((item) => item.open_id !== userInfo.openId);

      // setCommentList(list);

      // const myComment = list.find((item) => item.open_id === userInfo.openId);
      // setMyComment(myComment);

      // setLoading(false);
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
            {/* <View className="detail-page__comment-info">
              {loading ? (
                <Loading />
              ) : (
                <Fragment>
                  <Comment drink={drinkDetail} myComment={myComment} />
                </Fragment>
              )}
            </View> */}
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
