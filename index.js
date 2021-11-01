//1
function greatestOfTwo(int1,int2){
  if (int1>int2){
      return int1
  }else
      return int2
}

//console.log(greatestOfTwo(1,14))
//console.log(greatestOfTwo(-2,2))
//2
function greatestOfThree(int1,int2,int3){
    if (int1>int2&&int1>int3){
        return int1
    }else if (int2>int1&&int2>int3){
        return int2
    }else {
        return int3
        
            
        }
 
}
//console.log(greatestOfThree(-5, -2, -6) )
//console.log(greatestOfThree(3, 2, 11))

//3
function greatestOfFour(int1, int2, int3, int4){
    if (int1>int2 && int3<int1 && int1>int4){
        return int1
    }else if (int2>int1 && int2>int3 && int2>int4){
        return int2
    }else if(int3>int1 && int3>int2 && int3>int4){
        return int3
    }else
        return int4
}
//console.log(greatestOfFour(-5, -2, -6, 0))
//console.log(greatestOfFour(10, 2, 6, 11) )

//4
function leastOfFour(int1,int2,int3,int4){
    if (int1<int2&&int1<int3&&int1<int4){
        return int1
    }else if (int2<int1&&int2<int3&&int2<int4){
        return int2
    }else if (int3<int2&&int3<int1&&int3<int4){
        return int3
    }else
        return int4
  
}
console.log(leastOfFour(-5, -2, -6, 0)) // returns -6
console.log(leastOfFour(10, 2, 6, 11)) // returns 2
