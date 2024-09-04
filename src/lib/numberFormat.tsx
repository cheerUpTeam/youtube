const compactNumberFormatter = new Intl.NumberFormat("ko", {
  notation: "compact",
});

function compactNumber(number: number): string {
  return compactNumberFormatter.format(number);
}

export default compactNumber;
