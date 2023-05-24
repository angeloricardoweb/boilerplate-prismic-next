// 000.000.000-00
export function convertToCPF(text: any) {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d{3})(\d)/, '$1.$2');
  text = text.replace(/(\d{3})(\d)/, '$1.$2');
  text = text.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return text;
}
