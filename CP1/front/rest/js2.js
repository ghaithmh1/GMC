function solution(number){
    let acc=0;
    for(ac=0; ++ac < number;){
      console.log(ac)
      acc = !(number%3) || !(number%5) ? acc + number : acc;
    }
    return acc;
  }
let x =20
  console.log(solution(x))
  console.log(x)
  