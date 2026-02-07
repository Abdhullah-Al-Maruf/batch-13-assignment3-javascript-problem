function gonoVote(array) {
  if (!Array.isArray(array)){
    return "Invalid"
  }
  // this is empty object which will store count value
   let vootCount={};

    for(let voot of array){ // loop itate to each item
        // check the value on the object if found increase it
        if(vootCount.hasOwnProperty(voot)){
            vootCount[voot]++
            

        }else{ 
            // if not found the value on object initialize with 1
            vootCount[voot]=1;
        }
    
    }  // now we get how many time the ha na come
    //  we check the Object  value
    if(vootCount.ha ==vootCount.na){
        return "equal" 
    }else if(vootCount.ha<vootCount.na){
        return false
    }else if(vootCount.ha>vootCount.na){
        return true
    }

}

 const output=gonoVote(["ha","na","ha","na"]);
 console.log(output);
