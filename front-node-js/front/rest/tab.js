function removeDuplicates(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            res.push(arr[i]);
        }
    }
    return res;
}

let t = [1, 1, 1, 1, 2, 2, 2, 2, 2, 555];

console.log(removeDuplicates(t)); // Output: [1, 2, 555]
