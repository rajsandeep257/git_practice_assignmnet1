function clickfn(){
    let x = document.getElementById("age").value
   if(isPelendrome(x)){
   
       alert(`${x} is a Pelendrome`)
       document.getElementById("h1tag").innerText=`${x} is a Pelendrome`;
       document.getElementById("h1tag").style.color="green"
   }
   else{
       alert(`${x} is not a Pelendrome`)
       document.getElementById("h1tag").innerText=`${x} is NOT a Pelendrome`
       document.getElementById("h1tag").style.color="red"
   }
}

function isPelendrome(str){
    let bag = "";
  for(i=str.length-1;i>=0;i--){
    bag+=str[i]
  }
   return str==bag;
}