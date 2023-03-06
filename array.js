// filter for Number divisible by 10 from a given Array


let arr=[5,4,23,54,65,70,90];
let n =arr.filter((x)=>{
    return x%10==0
})
console.log(n)