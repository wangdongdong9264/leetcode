const merge = require('../src/合并区间.js')

const testValue = [[1,3],[2,6],[8,10],[15,18]]
const testValue2 = [[1,4],[4,5]]

test('should ', () => {
  expect(merge(testValue)).toEqual([[1,6],[8,10],[15,18]])
  expect(merge(testValue2)).toEqual([[1,5]])
})
