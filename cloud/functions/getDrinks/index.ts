import cloud from "wx-server-sdk";

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV as any,
});

const db = cloud.database();

const main = async () => {
  return ((await db.collection("drinks").get()) as any)?.data ?? [];
};

export { main };
