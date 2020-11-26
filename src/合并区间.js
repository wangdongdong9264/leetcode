/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

//  https://leetcode-cn.com/problems/merge-intervals/
// 思路： 先按照左端点升序排序 再对比右端点值 是否合并

var merge = function(intervals) {
  if (!intervals || !intervals.length) {
    return []
  }
  // 升序
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]
  for (let index = 1; index < intervals.length; index++) {
    if (result[result.length - 1][1] >= intervals[index][0]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[index][1])
    } else {
      result.push(intervals[index])
    }
  }
  return result
}

module.exports = merge
