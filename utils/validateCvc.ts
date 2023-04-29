export function validateCvc(cvc: string): string {
  if (!/^\d+$/.test(cvc)) {
    return "The CVC code consists of digits only.";
  }

  if (cvc.length !== 3 && cvc.length !== 4) {
    return "The CVC code must be 3 or 4 digits.";
  }

  return "";
}
