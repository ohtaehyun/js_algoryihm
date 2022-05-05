// https://programmers.co.kr/learn/courses/30/lessons/92335#
function solution(n, k) {
    return n.toString(k).split("0").filter(v=>isPrime(Number(v))).length;
}

function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i = 2; i <=Math.sqrt(num) ;i++){
        if(num%i ===0){
            return false;
        }
    }
    return true;
}