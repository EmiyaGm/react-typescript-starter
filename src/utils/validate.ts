export function isValidMobile(mobile: string): boolean {
  return /^1[358]\d{9}$|^147\d{8}$|^176\d{8}$/.test(mobile);
}

export function isValidEmail(email: string): boolean {
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
    email
  );
}
