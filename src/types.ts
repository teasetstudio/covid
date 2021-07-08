// ACTIONS
interface IGotInfo {
  type: string;
  payload: any;
}
interface IGetInfo2 {
  type: string;
}

export type Actions = IGotInfo | IGetInfo2;

// Main data
export type Tdata = {
  activeCases: number;
  country: string;
  lastUpdate: string;
  newCases: number;
  newDeath: number;
  totalCases: number;
  totalDeath: number;
  totalRecovered: number;
};
