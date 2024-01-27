import { FC, useState } from 'react';

import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { AtAvatar, AtButton, AtRate, AtTextarea } from 'taro-ui';
import { IComment, ICreateCommentParams, IDrink } from 'types';

import { services } from '@/services';
import { getUserInfo } from '@/utils/userInfo';

import './index.less';

interface ICommentProps {
  drink: IDrink;
  myComment?: IComment;
}

interface ICurCommentInfo {
  score: number;
  comment: string;
}

const userInfo = getUserInfo();

const Comment: FC<ICommentProps> = ({ drink, myComment }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [curComment, setCurComment] = useState<ICurCommentInfo>({
    score: myComment?.score ?? 0,
    comment: myComment?.comment ?? '',
  });

  const handleComment = async () => {
    if (!curComment.comment.length) {
      return;
    }
    setLoading(true);
    const param: ICreateCommentParams = {
      username: userInfo.nickName,
      open_id: userInfo.openId,
      avatar: userInfo.avatarUrl,
      gender: userInfo.gender ?? 0,
      drink_id: drink?._id!,
      comment: curComment.comment,
      score: curComment.score,
    };
    const result = await services.createComment(param);

    if (result.code) {
      setCurComment({
        score: 0,
        comment: '',
      });
    }

    setLoading(false);
  };

  return (
    <View className="comment">
      <View className="comment__header">
        <AtAvatar className="avatar" size="small" image={userInfo.avatarUrl} />
        <Text className="username">{userInfo.nickName}</Text>
      </View>
      <AtTextarea
        className="comment__textarea"
        value={curComment.comment}
        placeholder="喝完的话，说说你的感受吧～"
        onChange={(value) => {
          setCurComment((info) => ({
            ...info,
            comment: value,
          }));
        }}
      />
      <View className="comment__operation">
        <AtRate
          max={5}
          value={curComment.score}
          onChange={(value) =>
            setCurComment((info) => ({
              ...info,
              score: value as unknown as number,
            }))
          }
        />
        <AtButton loading={loading} size="small" type="primary" className="comment-btn" onClick={handleComment}>
          发送
        </AtButton>
      </View>
    </View>
  );
};

export default Comment;
