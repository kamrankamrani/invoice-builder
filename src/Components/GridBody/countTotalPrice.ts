interface IProps {
  price: number;
  count: number;
  off: number;
}

export default function countTotalPrice({ price, count, off }: IProps) {
  let _off = off;
  if (!(_off > 0)) {
    _off = 1;
  }
  _off /= 100;
  _off = 1 - _off;
  return price * count * _off;
}
