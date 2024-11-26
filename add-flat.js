function sumNestedArray(arr) {
    let sum = 0;
    let arr1 = arr.flat(Infinity);
    for (const element of arr1) {
        if (typeof element === 'number') {
            sum += element;
        }
    }
    return sum;
}