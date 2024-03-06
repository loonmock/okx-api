import {
  TradeMode,
  OrderSide,
  PositionSide,
  AlgoOrderType,
  numberInString,
  PriceTriggerType,
  OrderType,
  MarginMode,
  InstrumentType,
  AlgoState,
} from '../shared';

export interface AlgoRecentHistoryRequest {
  ordType: AlgoOrderType;
  algoId?: string;
  instType?: string;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface AlgoLongHistoryRequest {
  ordType: AlgoOrderType;
  state?: AlgoState;
  algoId?: string;
  instType?: string;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface AlgoOrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  side: OrderSide;
  posSide?: PositionSide;
  ordType: AlgoOrderType;
  sz: numberInString;
  tag?: string;
  reduceOnly?: boolean;
  tgtCcy?: string;

  tpTriggerPx?: numberInString;
  tpTriggerPxType?: PriceTriggerType;
  tpOrdPx?: numberInString;

  slTriggerPx?: numberInString;
  slTriggerPxType?: PriceTriggerType;
  slOrdPx?: numberInString;

  triggerPx?: numberInString;
  triggerPxType?: PriceTriggerType;
  orderPx?: numberInString;

  callbackRatio?: numberInString;
  callbackSpread?: numberInString;
  activePx?: numberInString;

  pxVar?: numberInString;
  pxSpread?: numberInString;
  szLimit?: numberInString;
  pxLimit?: numberInString;

  timeInterval?: string;
}

export interface AmendOrderRequest {
  instId: string;
  cxlOnFail?: boolean;
  ordId?: string;
  clOrdId?: string;
  reqId?: string;
  newSz?: string;
  newPx?: string;
}

export interface CancelAlgoOrderRequest {
  algoId: string;
  instId: string;
}

export interface ClosePositionRequest {
  instId: string;
  posSide?: PositionSide;
  mgnMode: MarginMode;
  ccy?: string;
  autoCxl?: boolean;
}

export interface FillsHistoryRequest {
  instType?: InstrumentType;
  uly?: string;
  instId?: string;
  ordId?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface OrderIdRequest {
  instId: string;
  ordId?: string;
  clOrdId?: string;
}

export interface OrderHistoryRequest {
  instType: InstrumentType;
  uly?: string;
  instId?: string;
  ordType?: OrderType;
  state?: string;
  category?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface OrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  clOrdId?: string;
  tag?: string;
  side: OrderSide;
  posSide?: PositionSide;
  ordType: OrderType;
  /** Quantity to buy or sell */
  sz: numberInString;
  px?: string;
  reduceOnly?: boolean;
  /** A spot buy on BTC-USDT with "base_ccy" would mean the QTY (sz) is in USDT */
  tgtCcy?: 'base_ccy' | 'quote_ccy';
  banAmend?: boolean;
}
