function sort(arr) {
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[zero] = arr[i];
            if (i !== zero) {
                arr[i] = 0;
            }
            zero++;
        }
    }
    for(let k = zero; k < arr.length; k++) {
        arr[k] = 0;
    }
    return arr;
}
console.log(sort([0, 4, 2, 0, 5]));
console.log(sort([4, 0, 0, 5, 7]));
module.exports={sort}
