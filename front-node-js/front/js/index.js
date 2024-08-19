let ch = "  . haith gauda 6 hhgdz  ." ;

function rev(ch){
    let ch2 ="";

    let i=ch.length-1
    for ( i ; i>=0 ; i-- ) {
        ch2+=ch[i];
        
    }

    return ch2 ;
}


function len (ch)
{
    return ch.length;
}


function cap(ch)
{
    let ch2=ch[0].toUpperCase();
    
    for (let i=1; i<ch.length ;i++)
        {
    
           if(ch.charAt(i)!=" ")
           {
            ch2+=ch[i];

           }
           else
           {
            ch2+=" ";
            ch2+=ch[i+1].toUpperCase();
            i++;

           }
           


        }


   
    return ch2 ;
}

var arr=[1,2,3,4,5,6];

function minmax (arr)
{
    return [Math.min(...arr), Math.max(...arr)] ;
}



function sum(arr)
{
    let sum =0 ;
    for( let i of arr)
    {
        sum+=i;
    }
    return sum ;
}

function trieCondition(arr,condition){
    let trieArray=[];
    for(const element of arr)
        {
        if(condition(element))
            {
            trieArray.push(element);
            }
        }
    return trieArray ;

}


var n=5;
function fact(n){
     let  p=1;
    for(let i=1;i<=n;i++){
       p=p*i;
    }
    return p;
}



let x=1;
function prem (x)
{
    if (x==1)
    {
        return false ;
    }

    for (let i=2; i<x/2; i++)
    {
        if(x%i==0 )
        {
         
         return  false;
        }

    }
    return true;

}


let u0=0;
let u1=1;


y=17;
function fub(y)
{
    let resf=[0,1]
    for (i=2;i<y;i++)
    {
        resf.push(resf[i-2]+resf[i-1])
    }

    return resf ;

}










console.log(fub(y));



