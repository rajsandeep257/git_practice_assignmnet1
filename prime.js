function clickfn(){
    let x = document.getElementById("age").value 
    x=+(x)
   if(isPrime(x)){
   
       alert(`${x} is a Prime Number`)
       document.getElementById("h1tag").innerText=`${x} is a Prime Number`;
       document.getElementById("h1tag").style.color="green"
   }
   else{
       alert(`${x} is not a Prime Number`)
       document.getElementById("h1tag").innerText=`${x} is NOT a Prime Number`
       document.getElementById("h1tag").style.color="red"
   }
}

function isPrime(num){
   let count=0;a
   for(i=1;i<=num;i++){
       if(num%i==0){
           count++
       }
   }
   return count==2;
}