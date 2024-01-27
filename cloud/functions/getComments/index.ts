import cloud from "wx-server-sdk";

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV as any,
});

const db = cloud.database();

const main = async (params: { drinkId: string }) => {
  try {
    const result =
      (
        (await db
          .collection("comments")
          .where({
            drink_id: params.drinkId,
          })
          .get()) as any
      )?.data ?? [];

    return {
      code: 1,
      data: result,
    };
  } catch (e) {
    return {
      code: 0,
    };
  }
};

export { main };
