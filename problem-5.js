function analyzeText(str) {
  if(typeof str !=="string" ||  str.trim() ==""){
    return "Invalid"
  }

  
  let longwords= "";
// here we convert the string into  array  by according to the white  space 
  let stringtoArray = str.split(" ")
  for(let word of stringtoArray){
    if(word.length>longwords.length){
     longwords=word;
    }
}
let wordWithoutSpace=stringtoArray.join("");
let token=wordWithoutSpace.length;
return{
    longwords,
    token,
}
}

let output= analyzeText("I am a little honest person");
console.log(output);