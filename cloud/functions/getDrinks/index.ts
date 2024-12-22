import cloud from "wx-server-sdk";

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV as any,
});

const db = cloud.database();

const main = async () => {
  try {
    const list = ((await db.collection("drinks").get()) as any)?.data ?? [];
    return {
      code: 1,
      data: list,
    };
  } catch (e) {
    return {
      code: 0,
    };
  }
};

export { main };
