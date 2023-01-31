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

export interface updateTitleData {
  row: number;
  title: string;
}
