// 00.000.000/0000-00
export function convertToCNPJ(text: any) {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d{2})(\d)/, '$1.$2');
  text = text.replace(/(\d{3})(\d)/, '$1.$2');
  text = text.replace(/(\d{3})(\d)/, '$1/$2');
  text = text.replace(/(\d{4})(\d)/, '$1-$2');
  return text;
}

export function convertCNPJtoRaw(text: any) {
  text = text.replace(/\D/g, '');
  return text;
}