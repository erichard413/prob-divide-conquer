// // findRotatedIndex
// // Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// // Constraints:

// // Time Complexity: O(log N)

// // Examples:

// // findRotatedIndex([3,4,1,2],4) // 1
// // findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// // findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// // findRotatedIndex([37,44,66,102,10,22],14) // -1
// // findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1




function findRotatedIndex(array, num) {
    let pivot = findPivot(array)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      return binarySearch(array, num, pivot, array.length - 1);
    }
  }
  
  function binarySearch(array, num, start, end) {
    // if length of the array is 0, return -1.
    if (array.length === 0) return -1;
    // if num is less than array[start], or num is greater than array end, we can assume the num is not within the array.
    if (num < array[start] || num > array[end]) return -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === num) {
        return mid;
      } else if (num < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  
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



module.exports = findRotatedIndex