export interface tableBodyType {
  row: number;
  name: string;
  count: number;
  unit: string;
  price: number;
  off: number;
  total: number;
}

export interface tableHeaderType {
  row: string;
  name: string;
  count: string;
  unitPrice: string;
  price: string;
  off: string;
  total: string;
  [Symbol.iterator](): IterableIterator<string>;
}

export interface updateInputData {
  row: number;
  value: string;
}

export interface updatePriceData {
  row: number;
  price: number;
}

export interface addressDataType {
  seller: string;
  sellerAddress: string;
  client: string;
  clientAddress: string;
}
