export function isValidMobile(mobile: string): boolean {
  return /^[1][3,4,5,7,8][0-9]{9}$/.test(mobile);
}
