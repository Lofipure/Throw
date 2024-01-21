export interface IDrink {
  _id: string;
  name: string;
  desc: string;
  cover: string;
  is_spec: boolean;
  tags: Array<string>;
}
