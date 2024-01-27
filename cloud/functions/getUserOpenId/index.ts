import cloud from "wx-server-sdk";

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV as any,
});

export const main = async () => {
  try {
    const { OPENID } = cloud.getWXContext();
    return {
      code: 1,
      data: {
        open_id: OPENID,
      },
    };
  } catch (e) {
    return {
      code: 0,
    };
  }
};
