// filter for Number divisible by 10 from a given Array


let arr=[5,4,23,54,65,70,90];
let n =arr.filter((x)=>{
    return x%10==0
})
console.log(n)




// Array of sqauare of given number


let num= arr.map((y)=>{
    return y*y
})
console.log(num);



// factorial of a given number from an array of first n natural numbers

let arr1=[1,2,3,4,5]
let number=arr1.reduce((x1,x2)=>{
return x1*x2
})
console.log(number)