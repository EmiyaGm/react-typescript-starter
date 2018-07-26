import { isValidMobile, isValidEmail } from '../validate';

test('isValid mobile', () => {
  expect(isValidMobile('15651727037')).toBe(true);
});

test('isValid mobile', () => {
  expect(isValidMobile('122222')).toBe(false);
});

test('isValid email', () => {
  expect(isValidEmail('398798008@qq.com')).toBe(true);
});
