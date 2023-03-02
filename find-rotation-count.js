// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

// [2,3,6,12,15,18] *input
// [18,2,3,6,12,15] * 1st rotation
// [15,18,2,3,6,12] * 2nd rotation

// [5, 7, 9, 11, 12] *input
// [12, 5, 7, 9, 11] *1st rotation
// [11, 12, 5, 7, 9] *2nd rotation
// [9, 11, 12, 5, 7] *3rd
// [7, 9, 11, 12, 5] *4th


function findRotationCount(arr) {
    if (arr[0] < arr[arr.length-1]) return 0;
    let pivot = findPivot(arr);
    return pivot;
}

//borrowing pivot from previous solution -> the pivot value will be the INDEX of where the lowest value in the array is, which happens to be the # of rotations!

function findPivot(arr) {
    // if array length is 1, or if first value in array less than last value in array (this means our array is not sorted), return 0.
    if (arr.length === 1 || arr[0] < arr[arr.length-1]) return 0;
    let start = 0;
    let end = arr.length -1;

    while (start <= end) {
      let mid = Math.floor((start+end)/2);
      // if value of middle index is GREATER than the value to it's right, we know we are at our pivot point, return mid+1 (start of next array);
      if (arr[mid] > arr[mid +1]) return mid +1
      // if left index value is less than or equal to the middle value, set left idx to mid +1.
      else if (arr[start] <= arr[mid]) {
        start = mid +1
      } else {
        // else -> set right index to middle index -1;
        end = mid -1
      }
    }
  }

module.exports = findRotationCount