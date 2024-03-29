export type ResponseFormater<T = any> = {
  code: number;
  message: string;
  data: T;
};
