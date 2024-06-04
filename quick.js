/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivotElement = arr[start];  // Choose the pivot element
    let swapIndex = start;          // Initialize the partitioning index

    for (let i = start + 1; i <= end; i++) {  // Iterate over the array
        if (arr[i] < pivotElement) {          // If the current element is less than the pivot
            swapIndex++;                      // Increment the partitioning index
            // Swap elements at swapIndex and i
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    // Swap the pivot element with the element at swapIndex
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

    return swapIndex;  // Return the final pivot position
}


/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // Get the pivot index
        quickSort(arr, left, pivotIndex - 1);     // Recursively sort the left side
        quickSort(arr, pivotIndex + 1, right);    // Recursively sort the right side
    }
    return arr; // Return the sorted array
}


module.exports = { pivot, quickSort };