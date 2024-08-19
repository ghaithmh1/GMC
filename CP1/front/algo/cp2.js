let arr = [1, 2, 3, 5, 6,-1,-9,44,-100,-4];
let x = 0;
function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
function add(x) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (x < arr[i]) {
            arr[i + 1] = arr[i];
        } else {
            arr[i + 1] = x;
            return arr;
        }
    }
    arr[0] = x; 
    return arr;
}



console.log("Unsorted arr:", arr);
console.log("sorted arr:", insertionSort(arr));
console.log("arr after adding", x, ":", add(x));
