interface numberFormatProps {
  num: number;
}

function numberFormat({ num }: numberFormatProps) {
  if (num > 999) {
    return `${Math.floor(num / 1000)}k`;
  } else return;
}

export default numberFormat;
