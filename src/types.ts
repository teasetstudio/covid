// ACTIONS
interface IGotInfo {
  type: string;
  payload: any;
}
interface IGetInfo2 {
  type: string;
}

export type Actions = IGotInfo | IGetInfo2;
