var readlinesync=require('readline-sync');
let limit=readlinesync.question('Enter the Limit :  ');
limit=parseInt(limit);
sum=0
for (var i=1;i<=limit;i++){
    if(i%2==1){
        sum=sum+i;
        console.log(i)
    }
}console.log("Sum : ",sum)