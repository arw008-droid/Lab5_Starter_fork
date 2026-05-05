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
 * 
 */
test("is an email", () => {
  const res = isEmail('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is an email", () => {
  const res = isEmail('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is an email", () => {
  const res = isEmail('');
  expect(res).toBeFalsy();
});

/**
 * 
 */
test("is an email", () => {
  const res = isEmail('');
  expect(res).toBeFalsy();
});

// isStrongPassword Tests

/**
 * 
 */
test("is a strong password", () => {
  const res = isStrongPassword('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is a strong password", () => {
  const res = isStrongPassword('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is a strong password", () => {
  const res = isStrongPassword('');
  expect(res).toBeFalsy();
});

/**
 * 
 */
test("is a strong password", () => {
  const res = isStrongPassword('');
  expect(res).toBeFalsy();
});

// isDate Tests

/**
 * 
 */
test("is a date", () => {
  const res = isDate('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is a date", () => {
  const res = isDate('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is a date", () => {
  const res = isDate('');
  expect(res).toBeFalsy();
});

/**
 * 
 */
test("is a date", () => {
  const res = isDate('');
  expect(res).toBeFalsy();
});

// isHexColor Tests

/**
 * 
 */
test("is hexcolor", () => {
  const res = isHexColor('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is hexcolor", () => {
  const res = isHexColor('');
  expect(res).toBeTruthy();
});

/**
 * 
 */
test("is hexcolor", () => {
  const res = isHexColor('');
  expect(res).toBeFalsy();
});

/**
 * 
 */
test("is hexcolor", () => {
  const res = isHexColor('');
  expect(res).toBeFalsy();
});
