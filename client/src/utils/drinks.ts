import Taro from "@tarojs/taro";
import { services } from "../services";
import { DRINKS_LIST_KEY } from "../constants";
import { IDrink } from "../../types";

export const initDrinkList = async () => {
  const { result } = await services.getDrinks();

  Taro.setStorageSync(DRINKS_LIST_KEY, JSON.stringify(result as any));
};

export const getDrinkList = () =>
  JSON.parse(Taro.getStorageSync(DRINKS_LIST_KEY)) as IDrink[];
