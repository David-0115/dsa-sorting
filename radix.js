//getDigit, digitCount, mostDigits, radixSort 

function digitCount(num) {
    return String(Math.abs(num)).length;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let num of arr) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}

function getDigit(num, digit) {
    const len = digitCount(num)
    if (digit > len - 1) {
        return 0
    } else {
        let idx = (len - 1) - digit
        let strNum = String(num)
        return (Number(strNum[idx]))
    }
}

function radixSort(arr) {
    const maxDigitCount = mostDigits(arr)
    for (let i = 0; i < maxDigitCount; i++) {
        const buckets = [[], [], [], [], [], [], [], [], [], []]

        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j])
        }

        arr = [].concat(...buckets)
    }

    return arr
}



module.exports = { getDigit, digitCount, mostDigits, radixSort };