export function getCount(): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
}