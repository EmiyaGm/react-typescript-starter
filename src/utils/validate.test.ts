import { isValidMobile } from './validate';

test('isValid mobile', () => {
  expect(isValidMobile('15651727037')).toBe(true);
});
