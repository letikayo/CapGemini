let cadeia = prompt("Escreva uma palavra");

let numeroCombinacoes = factorial(cadeia.length);

let anagramas = [];

while(anagramas.length != numeroCombinacoes){

  let anagrama = combinar(cadeia);

  if(!anagramas.includes(anagrama)) anagramas.push(anagrama);
 
 }

console.log(anagramas);
function combinar(cadeia){
 
  let array = Array.from(cadeia);
  
 
  for(i = 0 ; i < array.length; i++){
   
    let index  = Math.floor(Math.random() * array.length);
    
  
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  
  }

  return array.join('');

}


function factorial (n) {
    let total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total; 
}
