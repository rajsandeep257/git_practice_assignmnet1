function clickfn(){
    let x = document.getElementById("age").value 
    x=+(x)
   if(isPrime(x)){
       alert(`${x} is a Prime Number`)
   }
   else{
       alert(`${x} is not a Prime Number`)
   }
}

function isPrime(num){
   let count=0;
   for(i=1;i<=num;i++){
       if(num%i==0){
           count++
       }
   }
   return count==2;
}