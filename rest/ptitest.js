let t1 = [1, 2, 3, 4, 5,2];
let t2 = [1, 2, 3,5,2,15,15];
let t = dup([...t1, ...t2]);
t1 = dup(t1);
t2 = dup(t2);

function dup(t) {
    let res = [];
    for (let i = 0; i < t.length; i++) {
        let dup = false;
        for (let j = 0; j < res.length; j++) {
            if (t[i] === res[j]) {
                dup = true;
                break;
        }}
        if (!dup) { res.push(t[i]);} }
    return res;
    }

console.log("Le tableau fusionné est : " + t);

let sum = t.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

for (let i = 0; i < t1.length; i++) {
    if (t2.includes(t1[i])) {
        console.log(t1[i]);
        sum -= t1[i];
    }
}

console.log("Somme après soustraction : " + sum);
