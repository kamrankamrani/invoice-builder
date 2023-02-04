export function PersianNumber(inputNum: number | string | undefined): string {
  if (inputNum === undefined) return "";
  if (typeof inputNum !== "string") {
    inputNum = String(inputNum);
  }
  const length = inputNum.length;
  const persianNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = "";
  for (let i = 0; i < length; i++) {
    if (inputNum[i] >= "0" && inputNum[i] <= "9") {
      result += persianNums[parseInt(inputNum[i])];
    } else {
      result += inputNum[i];
    }
  }
  return result;
}

export function EnglishNumber(inputNum: number | string | undefined): string {
  if (inputNum === undefined) return "";
  if (typeof inputNum !== "string") {
    inputNum = String(inputNum);
  }
  const length = inputNum.length;
  const persianNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = "";
  for (let i = 0; i < length; i++) {
    const _index = persianNums.findIndex(
      (val) => inputNum && inputNum[i] === val
    );
    // console.log("input is ", inputNum);
    if (~_index) {
      result += String(_index);
    } else {
      result += String(inputNum[i]);
    }
  }
  return result;
}
