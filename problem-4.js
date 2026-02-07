function validOtp(otp) {
    if( typeof otp !=="string"){
        return "Invalid"
    }
    let charCount=otp.length
    let ishave=otp.startsWith("ph-");
    if(charCount==8 && ishave){
        return true
    }
    else{
        return false
    }
}



let output=validOtp("ph-10985")
console.log(output);
let output2=validOtp(["ph-10985"])
console.log(output2);