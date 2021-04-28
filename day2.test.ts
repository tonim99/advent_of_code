
//interface IEntry {
//  min: number;
//  max: number;
//  requiredChar: string;
//  password: string;
//};
//
const isValid = require('./day2');

test('simple single character password is accepted', () => {
  let input = { min: 1, max: 1, requiredChar: "a", password: "a" };
  expect(isValid(input)).toBe(true);
})

test('password invalid- required character not present', () => {
  let input = { min: 1, max: 1, requiredChar: 'a', password: 'b' }
  expect(isValid(input)).toBe(false)
})

test('simple two character password is accepted', () => {
  let input = { min: 1, max: 1, requiredChar: "a", password: "ab" };
  expect(isValid(input)).toBe(true);
})

test('password invalid - max character instance exceeded', () => {
  let input = { min: 1, max: 1, requiredChar: 'a', password: 'aa' }
  expect(isValid(input)).toBe(false)
})

test('password invalid - min character instance not met', () => {
  let input = { min: 2, max: 2, requiredChar: 'a', password: 'a' }
  expect(isValid(input)).toBe(false)
})

test('example 1 should be true', () => {
  //1-3 a: abcde
  let input = { min: 1, max: 3, requiredChar: 'a', password: 'abcde' }
  expect(isValid(input)).toBe(true)
})

test('example 2 should be false', () => {
  //1-3 b: cdefg
  let input = { min: 1, max: 3, requiredChar: 'b', password: 'cdefg' }
  expect(isValid(input)).toBe(false)
})

test('example 3 should be true', () => {
  //2-9 c: ccccccccc
  let input = { min: 2, max: 9, requiredChar: 'c', password: 'ccccccccc' }
  expect(isValid(input)).toBe(true)
})