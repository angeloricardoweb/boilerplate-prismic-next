// 0.000,00 -> 0000.00

export function convertToRawCurrency(text: string) {
  const textWithoutDots = text.replace(/\./g, '');
  const textWithoutCommas = textWithoutDots.replace(/,/g, '.');
  const textWithoutSpaces = textWithoutCommas.replace(/\s/g, '');

  return textWithoutSpaces;
}
