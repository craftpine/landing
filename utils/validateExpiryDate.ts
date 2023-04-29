export function validateExpiryDate(expiryDate: string): string {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!regex.test(expiryDate)) {
    return "Invalid expiration date (MM/YY)";
  }

  const parts = expiryDate.split("/");
  const month = parseInt(parts[0]);
  const year = parseInt("20" + parts[1]);

  const expiryDateObj = new Date(year, month, 0);
  const today = new Date();

  if (expiryDateObj < today) {
    return "Card has been expired";
  }

  return "";
}
