export function validateCardNumber(cardNumber: string) {
  const cleanedCardNumber = cardNumber.replace(/[\s-]/g, "");

  if (!/^\d{13,19}$/.test(cleanedCardNumber)) {
    return "Invalid card number";
  }

  let sum = 0;
  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber.charAt(i));
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  if (sum % 10 !== 0) {
    return "Invalid card number";
  }

  return "";
}
