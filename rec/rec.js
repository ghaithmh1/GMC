let year=1700;



function leap(year){
if(year%4==0 && (year%100 || year%400==0 ) )
{
    return "it's a Leap year"
}
else{return "it's not a Leap year" }

}



let age=20;
function pric (age)
{
    let price;

    switch (true) {
        case (age <= 12):
            price = 10
            break
        case (age >= 13 && age <= 17):
            price = 15
            break
        case (age >= 18):
            price = 20
            break;
        default:
            price = "Invalid age"
    }
    return "the price is : "+price
}



let t=17
let mtar="ey"

function temp(t,mtar)
{
    let res
    if (t < 0) 
        {
        res = "too cold ! Wear a coat";
    } 
    else if (t >= 0 && t < 10) 
        {
        res = "Wear a coat";
    } 
    else if (t >= 10 && t < 20) 
        {
        res = "Wear a  jacket .";
    }

    if (mtar === "ey") 
        {res += "  take an umbrella ";}

    return res 

}


let n=5

function fib(n)
{
    if(n<=1)
    {
        return n
    }
    else 
    {
        return fib(n-1)+fib(n-2)
    }
}



let ch = "az .ert    tre z aa";
ch = ch.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
let d = 0;
let f = ch.length - 1;

function check(ch, d, f) {
    if (d >= f) {
        return true;
    }
    if (ch[d] !== ch[f]) {
        return false;
    }
    return check(ch, d + 1, f - 1);
}


function pow(n,p)
{
    if (p==1) {return n}
    else {
        return n*pow(n,p-1)
    } 

}


console.log("leap : "+leap(year))
console.log("pric : "+pric (age))
console.log("temp : "+temp(t,mtar))
console.log("fibo : "+fib(n))
console.log("chec : "+check(ch, d, f));
console.log("pow : " +pow(3,3))