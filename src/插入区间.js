/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


// https://leetcode-cn.com/problems/insert-interval/
// 思路： 先将newInterval合并到intervals 然后在根据左端点值升序 再根据右端值对比是否需要插入 
var insert = function(intervals, newInterval) {
  const value =  [...intervals, newInterval]
  value.sort((a, b) => a[0] - b[0] )
  const result = [value[0]]
  for (let index = 1; index < value.length; index++) {
   if (result[result.length - 1][1] >= value[index][0]) {
    result[result.length - 1][1] = Math.max(result[result.length - 1][1], value[index][1])
   } else {
     result.push(value[index])
   }
  }
  return result
};

module.exports = insert