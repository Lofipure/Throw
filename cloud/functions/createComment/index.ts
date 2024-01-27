import cloud from "wx-server-sdk";

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV as any,
});

interface IParams {
  _id: string;
  drink_id: string;
  open_id: string;
  username: string;
  avatar: string;
  gender: number;

  comment: string;
  score: number;
}

const db = cloud.database();

export const main = async (params: IParams) => {
  const { OPENID } = cloud.getWXContext();
  if (OPENID !== params.open_id) {
    return {
      code: 0,
      errMsg: "登录态不一致，你到底是什么人！",
    };
  }

  const result = await db.collection("comments").add({
    data: {
      ...params,
      create_time: new Date(),
      update_time: new Date(),
    },
  });

  console.log("[🔧 Debug 🔧]", "result", result);

  return {
    code: 1,
    data: {
      result: true,
    },
  };
};
