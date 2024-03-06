export interface AccountBalance {
  adjEq: string;
  details: AccountBalanceDetail[];
  imr: string;
  isoEq: string;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  ordFroz: string;
  totalEq: string;
  uTime: string;
}

export interface AccountBalanceDetail {
  availBal: string;
  availEq: string;
  cashBal: string;
  ccy: string;
  crossLiab: string;
  disEq: string;
  eq: string;
  eqUsd: string;
  frozenBal: string;
  interest: string;
  isoEq: string;
  isoLiab: string;
  isoUpl: string;
  liab: string;
  maxLoan: string;
  mgnRatio: string;
  notionalLever: string;
  ordFrozen: string;
  twap: string;
  uTime: string;
  upl: string;
  uplLiab: string;
  stgyEq: string;
}

export interface AccountPosition {
  adl: string;
  availPos: string;
  avgPx: string;
  cTime: string;
  ccy: string;
  deltaBS: string;
  deltaPA: string;
  gammaBS: string;
  gammaPA: string;
  imr: string;
  instId: string;
  instType: string;
  interest: string;
  usdPx: string;
  last: string;
  lever: string;
  liab: string;
  liabCcy: string;
  liqPx: string;
  markPx: string;
  margin: string;
  mgnMode: string;
  mgnRatio: string;
  mmr: string;
  notionalUsd: string;
  optVal: string;
  pTime: string;
  pos: string;
  posCcy: string;
  posId: string;
  posSide: string;
  thetaBS: string;
  thetaPA: string;
  tradeId: string;
  uTime: string;
  upl: string;
  uplRatio: string;
  vegaBS: string;
  vegaPA: string;
}

export interface HistoricAccountPosition {
  cTime: string;
  ccy: string;
  closeAvgPx: string;
  closeTotalPos: string;
  instId: string;
  instType: string;
  lever: string;
  mgnMode: string;
  openAvgPx: string;
  openMaxPos: string;
  pnl: string;
  pnlRatio: string;
  posId: string;
  posSide: string;
  triggerPx: string;
  type: string;
  uTime: string;
  uly: string;
}

export interface AccountBalanceRiskData {
  ccy: string;
  disEq: string;
  eq: string;
}

export interface AccountPositionRiskData {
  baseBal: string;
  ccy: string;
  instId: string;
  instType: string;
  mgnMode: string;
  notionalCcy: string;
  notionalUsd: string;
  pos: string;
  posCcy: string;
  posId: string;
  posSide: string;
  quoteBal: string;
}

export interface AccountPositionRisk {
  adjEq: string;
  balData: AccountBalanceRiskData[];
  posData: AccountPositionRiskData[];
  ts: string;
}

export interface AccountBill {
  bal: string;
  balChg: string;
  billId: string;
  ccy: string;
  execType: string;
  fee: string;
  from: string;
  instId: string;
  instType: string;
  mgnMode: string;
  notes: string;
  ordId: string;
  pnl: string;
  posBal: string;
  posBalChg: string;
  subType: string;
  sz: string;
  to: string;
  ts: string;
  type: string;
}

export interface AccountConfiguration {
  acctLv: string;
  autoLoan: boolean;
  ctIsoMode: string;
  greeksType: string;
  level: string;
  levelTmp: string;
  mgnIsoMode: string;
  posMode: string;
  uid: string;
}

export interface AccountPositionModeResult {
  posMode: string;
}

export interface AccountLeverageResult {
  lever: string;
  mgnMode: string;
  instId: string;
  posSide: string;
}

export interface AccountMaxOrderAmount {
  ccy: string;
  instId: string;
  maxBuy: string;
  maxSell: string;
}

export interface AccountMaxTradableAmount {
  instId: string;
  availBuy: string;
  availSell: string;
}

export interface AccountChangeMarginResult {
  amt: string;
  ccy: string;
  instId: string;
  leverage: string;
  posSide: string;
  type: string;
}

export interface AccountLeverage {
  instId: string;
  mgnMode: string;
  posSide: string;
  lever: string;
}

export interface AccountMaxLoan {
  instId: string;
  mgnMode: string;
  mgnCcy: string;
  maxLoan: string;
  ccy: string;
  side: string;
}

export interface AccountFeeRate {
  category: never;
  delivery: string;
  exercise: string;
  instType: string;
  level: string;
  maker: string;
  makerU: string;
  taker: string;
  takerU: string;
  ts: string;
}

export interface AccountIsolatedMode {
  isoMode: 'autonomy' | 'automatic';
}
