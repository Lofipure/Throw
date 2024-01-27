import { UserInfo } from '@tarojs/taro';

export interface IDrink {
  _id: string;
  name: string;
  desc: string;
  cover: string;
  is_spec: boolean;
  tags: Array<string>;
  attr: {
    alcohol: number;
    beauty: number;
    taste: number;
  };
  steps: string[];
}

export interface IComment {
  _id: string;
  drink_id: string;
  open_id: string;
  username: string;
  avatar: string;
  gender: number;

  create_time: string;
  update_time: string;

  comment: string;
  score: number;
}

export interface ICreateCommentParams {
  drink_id: string;
  open_id: string;
  username: string;
  avatar: string;
  gender: keyof UserInfo.Gender;
  comment: string;
  score: number;
}
