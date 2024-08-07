let ch="aa"
let d=0
let f=ch.length-1
function lind(ch,d,f)
{
    if (d>=f){ return true}
    if (ch[d]!=ch[f]){return false}
    return lind(ch,d+1,f-1)}






function leap (year){
    if (year%4==0 && (year%100!=0 || year%400==0))
    {
        return " it's a leap year"
    }
    return " it's not a leap year"
}




function puis(n,p)
{
    if (p==1)
    {
        return n
    }
    else if (p==0)
    {
        return 1
    }
    
    else{
        return puis(n,p-1)*n
    }
}
console.log( puis(0,0))