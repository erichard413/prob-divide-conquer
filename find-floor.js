// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)

function findFloor(arr, val) {
    // if (arr[arr.length-1] < val) return arr[arr.length-1];
    let idx = findIndex(arr, val);
    if (arr[0] > val) return -1;

    return arr[idx];
}

function findIndex(arr, val) {
    let rightIdx = arr.length-1;
    let leftIdx = 0;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleVal = arr[middleIdx];

            if (middleVal > val) {
                rightIdx = middleIdx-1;
            }
            if (middleVal <= val && arr[middleIdx+1] >= val) {
                return middleIdx;
            }
            if (middleVal < val) {
                leftIdx = middleIdx+1;
            }
    }
    return arr.length-1;
}

module.exports = findFloor