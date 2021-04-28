//1-3 a: abcde
//1-3 b: cdefg
//2-9 c: ccccccccc
//
//{ min: number, max: number, requiredChar: char, password: string }

function isValid(input) {
  let splitPassword = input.password.split(input.requiredChar)
  return splitPassword.length > input.min && splitPassword.length <= input.max + 1
}

module.exports = isValid