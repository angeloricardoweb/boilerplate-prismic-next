// (00) 00000-0000
export function convertToPhoneNumber(text: any) {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d{2})(\d)/, '($1) $2');
  text = text.replace(/(\d{5})(\d)/, '$1-$2');
  text = text.replace(/(\d{4})(\d)/, '$1$2');
  return text;
}
