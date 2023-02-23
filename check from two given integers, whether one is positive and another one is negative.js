function check_num(num1,num2){
    if(num1>0 && num2<0 || num1<0 && num2>0){
        return (true)

    }
    else{
        return(false);
    }

}
console.log(check_num(5,-5))
console.log(check_num(-5,-5))
console.log(check_num(-5,5))
console.log(check_num(8,5))