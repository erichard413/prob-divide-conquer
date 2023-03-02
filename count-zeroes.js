// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)


function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length -1;
  let count = 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === 0) {
        rightIdx = middleIdx -1;
    }
    if (middleVal === 1) {
        leftIdx = middleIdx +1
    }
    if (arr[leftIdx] === 0) {
        count = arr.length - leftIdx;
    }
  }
  return count;
}


module.exports = countZeroes