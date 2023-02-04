import { useAppDispatch } from "../../customHooks";
import { useState, useEffect } from "react";
import { updateItemPrice } from "../../features/tableBodySlice";
import { tableBodyType } from "../../Services/Types";

export default function useCountTotalPrice(
  tableItems: tableBodyType[]
): number[] {
  const [totalPrices, setTotalPrice] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const _totalPrices: number[] = [];
    if (tableItems.length) {
      tableItems.forEach((val, index) => {
        let _off = val.off;
        if (!(_off >= 0)) {
          _off = 1;
        }
        _off /= 100;
        _off = 1 - _off;
        const finalPrice = val.price * val.count * _off;
        _totalPrices.push(finalPrice);
        if (totalPrices[index] !== finalPrice) {
          dispatch(updateItemPrice({ row: index, price: finalPrice }));
        }
      });
      setTotalPrice(_totalPrices);
    }
  }, [tableItems]);

  return totalPrices;
}
