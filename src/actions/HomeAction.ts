import { Actions } from "../types";

export const GOT_INFO = "GOT_INFO";

export const gotInfo = (data: any): Actions => ({
  type: GOT_INFO,
  payload: data,
});
