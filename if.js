let num1=10;
let num2=30;
var readlinesync=require('readline-sync')
let a=readlinesync.question('1 for Addition     2 for Substractio       3 for Multiplication       4 for Division')
a=parseInt(a);
if (a==1){
    console.log(num1,"+",num2,"=",num1+num2);
}else if (a==2) {
    console.log(num1,"-",num2,"=",num1-num2)
}else if (a==3){
    console.log(num1,"x",num2,"=",num1*num2)
}else if (a==4){
    console.log(num1,"/",num2,"=",num1/num2)
}else{
    console.log('Invalid entry')
}
