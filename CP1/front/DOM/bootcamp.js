let btnplus = document.getElementsByClassName('fa-plus-circle');
let total = document.getElementsByClassName('total');
let price = document.getElementsByClassName('unit-price');
let btnmn = document.getElementsByClassName('fa-minus-circle');
let qu = document.getElementsByClassName('quantity');
let sum = [];
let quantity = [];

function sommetot(arr) {
    return arr.reduce((sm, i) => sm + i, 0);
}

for (let i = 0; i < btnplus.length; i++) {
    quantity[i] = parseInt(qu[i].textContent);
    
    btnplus[i].addEventListener('click', function() {
        quantity[i]++;
        qu[i].innerHTML = quantity[i];
        sum[i] = parseInt(price[i].textContent) * quantity[i];
        total[0].innerHTML = sommetot(sum);
    });

    btnmn[i].addEventListener('click', function() {
        if (quantity[i] > 0) {
            quantity[i]--;
            qu[i].innerHTML = quantity[i];
            sum[i] = parseInt(price[i].textContent) * quantity[i];
            total[0].innerHTML = sommetot(sum);
        }
    });

    let btnlv = document.getElementsByClassName('fas fa-heart');
    let nbc = [];
    nbc[i] = 0;
    btnlv[i].addEventListener('click', function() {
        nbc[i]++;
        if(nbc[i]%2==1)
            {
                this.style.color = "red";
            }
            else
            {
                this.style.color = "black";
            }
    });

    let btndlt = document.getElementsByClassName('fas fa-trash-alt');
    let cardb = document.getElementsByClassName('card-body cb');
    btndlt[i].addEventListener('click', function() {
        cardb[i].parentNode.removeChild(cardb[i]);
        // cardb[i].remove(); fi blasset cardb[i].parentNode.removeChild(cardb[i]);
        sum[i] = 0;
        total[0].innerHTML = sommetot(sum);
    });
}