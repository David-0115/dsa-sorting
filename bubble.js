

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let shifted = false
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                shifted = true
            }
        }
        if (!shifted) return arr
    }
    return arr
}

module.exports = bubbleSort;