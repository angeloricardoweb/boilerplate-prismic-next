// 00,00
export function convertToCurrencyBrValue(text: any) {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d)(\d{2})$/, '$1,$2');
  text = text.replace(/(?=(\d{3})+(\D))\B/g, '.');
  return text;
}
