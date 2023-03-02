// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1



function sortedFrequency(arr, val) {
    if (arr[arr.length -1] < val) return -1;
    // we are finding two different idx, so do this in two different functions.
    let firstIdx = findFirst(arr, val);
    let secondIdx = findLast(arr, val);
    return secondIdx - firstIdx +1;
}

function findFirst(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleValue = arr[middleIdx];
        if (middleValue < val) {
            leftIdx = middleIdx +1;
        }
        // because we are looking for the first instance of the value in the array, we move right index LEFTWARD (-1) if middleValue is GREATER THAN or EQUAL TO value;
        if (middleValue >= val) {
            rightIdx = middleIdx -1;
        }
        if (middleIdx == 0 || val > arr[middleIdx-1] && arr[middleIdx] == val) {
            return middleIdx
        }
    }
    return -1;
}

function findLast(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;

    while(leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx)/2);
        let middleValue = arr[middleIdx];
        if (middleValue <= val) {
            // because we are looking for the rightmost index, we move left IDX to the right (+1) if middleValue is LESS THAN or EQUAL TO value;
            leftIdx = middleIdx +1;
        }
        if (middleValue > val) {
            rightIdx = middleIdx -1;
        }
        if (middleIdx == arr.length-1 || val < arr[middleIdx+1] && arr[middleIdx] == val) {
            return middleIdx
        }
    }
    return -1;
}

module.exports = sortedFrequency