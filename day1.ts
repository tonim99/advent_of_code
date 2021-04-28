import * as fs from 'fs';

function findSum(sum: number, input: Array<number>) {
  return findSumh(sum, input, 0, 1, 2);
}

function findSumh(goal: number, input: Array<number>, index1: number, index2: number, index3: number) {
  if (index1 >= input.length) {
    return [-1, -1];
  }
  if (index2 >= input.length)
  {
    return findSumh(goal, input, index1+1, index1+2, index1+3);
  }
  if (index3 >= input.length) {
    return findSumh(goal, input, index1, index2+1, index2+2)
  }
  if (input[index1] + input[index2] + input[index3] == goal) {
    return [input[index1], input[index2], input[index3]]
  }
  return findSumh(goal, input, index1, index2, index3+1);
}

function findSumj(goal: number, input: Array<number>) {
  for (let index1 = 0; index1 < input.length; index1++) {
    for (let index2 = index1 + 1; index2 < input.length; index2++) {
      for (let index3 = index2 + 1; index3 < input.length; index3++) {
        if (input[index1] + input[index2] + input[index3] == goal) {
          return [input[index1], input[index2], input[index3]]
        } 
      }
    }
  }
  return [-1,-1]
}
const file = fs.readFileSync('./day1_input.txt', 'utf-8').split(/\n/).map((input: string) => { return parseInt(input) })
const answer = findSumj(2020, [1721, 979, 366, 299, 675, 1456]);
console.log(answer);
console.log(answer[0]*answer[1]*answer[2]);
