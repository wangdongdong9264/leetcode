const insert = require('../src/插入区间.js')

const testValue = [
  [[1,3],[6,9]],
  [2,5]
]
const testValue2 = [
  [[1,2],[3,5],[6,7],[8,10],[12,16]],
  [4,8]
]

test('should ', () => {
  expect(insert(testValue[0], testValue[1])).toEqual([[1,5],[6,9]])
  expect(insert(testValue2[0], testValue2[1])).toEqual([[1,2],[3,10],[12,16]])
})
