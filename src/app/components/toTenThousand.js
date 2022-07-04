export function toTenThousand(num) {
  if (num >= 10000 && num <1000000) {
    return (num / 10000).toFixed(2) + "萬";
  }
  else if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + "百萬";
  }
  else return num.toFixed(2);
}
