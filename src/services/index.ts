export function api_login(username: string, password: string) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'jack', mobile: '13913913913' });
    }, 1000);
  });
}
