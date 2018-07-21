import { isValidMobile } from '../validate';

test('isValid mobile', () => {
  expect(isValidMobile('15651727037')).toBe(true);
});

test('isValid mobile', () => {
  expect(isValidMobile('122222')).toBe(false);
});
