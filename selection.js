function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let min = arr[i]
        let idx;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                idx = j
            }
        }

        if (min !== arr[i]) {
            arr[idx] = arr[i]
            arr[i] = min
        }

    }
    return arr

}

module.exports = selectionSort;

//select the first item in the unsorted array
//compare it to the rest of the array, if a number is smaller select that 
//continue to scan the array for a smaller number, if not swap smallest
//to the first position of the unsorted array
