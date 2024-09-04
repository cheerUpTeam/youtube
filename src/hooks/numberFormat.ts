interface numberFormatProps {
  num: number;
}

function numberFormat({ num }: numberFormatProps) {
  if (num > 999) {
    return `${Math.floor(num / 1000)}k`;
  } else if (num > 999999) {
    return `${(num / 1000000).toFixed(2)}M`;
  } else return;
}

export default numberFormat;
