// 00.000.000/0000-00
export function converteToCPForCNPJ(text: any) {
  if (text.length <= 14) {
    text = text.replace(/\D/g, '');
    text = text.replace(/(\d{3})(\d)/, '$1.$2');
    text = text.replace(/(\d{3})(\d)/, '$1.$2');
    text = text.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return text;
  }

  if (text.length > 14) {
    text = text.replace(/\D/g, '');
    text = text.replace(/(\d{2})(\d)/, '$1.$2');
    text = text.replace(/(\d{3})(\d)/, '$1.$2');
    text = text.replace(/(\d{3})(\d)/, '$1/$2');
    text = text.replace(/(\d{4})(\d)/, '$1-$2');
    return text;
  }
}
