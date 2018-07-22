export function isValidMobile(mobile: string): boolean {
  return /^[1][3,4,5,7,8][0-9]{9}$/.test(mobile);
}

export function isValidEmail(email: string): boolean {
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
    email
  );
}
