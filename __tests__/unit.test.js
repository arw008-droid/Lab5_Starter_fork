// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber Tests
/**
 * Test random US phone number
 */
test("(206) 342-8631 is a phone number", () => {
  const res = isPhoneNumber('(206) 342-8631');
  expect(res).toBeTruthy();
});

/**
 * Test random Canada phone number
 */
test("(035) 243-3401 is a phone number",() => {
  const res = isPhoneNumber('(035) 243-3401');
  expect(res).toBeTruthy();
});

/**
 * Test random Australian phone number
 */
test("+61 8 8711 6772 is a phone number",() => {
  const res = isPhoneNumber('61 8 8711 6772');
  expect(res).toBeFalsy();
});

/**
 * Test random UK phone number
 */
test("+44 36 9339 4440 is a phone number", () => {
  const res = isPhoneNumber('+44 36 9339 4440');
  expect(res).toBeFalsy();
});

//isEmail Tests
/** 
 * Test random email
 */
test("test@gmail.com is an email", () => {
  const res = isEmail('test@gmail.com');
  expect(res).toBeTruthy();
});

/**
 * Test random email
 */
test("user_123@work_place.org is an email", () => {
  const res = isEmail('user_123@work_place.org');
  expect(res).toBeTruthy();
});

/**
 * Test random email
 */
test("user@site.info is an email", () => {
  const res = isEmail('user@site.info');
  expect(res).toBeFalsy();
});

/**
 * Test random email
 */
test("user@mail.123 is an email", () => {
  const res = isEmail('user@mail.123');
  expect(res).toBeFalsy();
});

// isStrongPassword Tests

/**
 * Test random strong password
 */
test("Sky_2024 is a strong password", () => {
  const res = isStrongPassword('Sky_2024');
  expect(res).toBeTruthy();
});

/**
 * Test random strong password
 */
test("A1_b2_C3 is a strong password", () => {
  const res = isStrongPassword('A1_b2_C3');
  expect(res).toBeTruthy();
});

/**
 * Test random weak password
 */
test("9_CloudNine is a strong password", () => {
  const res = isStrongPassword('9_CloudNine');
  expect(res).toBeFalsy();
});

/**
 * Test random weak password
 */
test("Blue!Sky@77 is a strong password", () => {
  const res = isStrongPassword('Blue!Sky@77');
  expect(res).toBeFalsy();
});

// isDate Tests

/**
 * Test random valid date
 */
test("5/12/2024 is a date", () => {
  const res = isDate('5/12/2024');
  expect(res).toBeTruthy();
});

/**
 * Test random valid date
 */
test("10/31/1999 is a date", () => {
  const res = isDate('10/31/1999');
  expect(res).toBeTruthy();
});

/**
 * Test random invalid date
 */
test("05/12/24 is a date", () => {
  const res = isDate('05/12/24');
  expect(res).toBeFalsy();
});

/**
 * Test random invalid date
 */
test("5-12-2024 is a date", () => {
  const res = isDate('5-12-2024');
  expect(res).toBeFalsy();
});

// isHexColor Tests

/**
 * Test random hexcolor
 */
test("#F00 is hexcolor", () => {
  const res = isHexColor('#F00');
  expect(res).toBeTruthy();
});

/**
 * Test random hexcolor
 */
test("#3a7bd5 is hexcolor", () => {
  const res = isHexColor('#3a7bd5');
  expect(res).toBeTruthy();
});

/**
 * Test random hexcolor
 */
test("#FG0000 is hexcolor", () => {
  const res = isHexColor('#FG0000');
  expect(res).toBeFalsy();
});

/**
 * Test random hexcolor
 */
test("#FF00 is hexcolor", () => {
  const res = isHexColor('#FF00');
  expect(res).toBeFalsy();
});
