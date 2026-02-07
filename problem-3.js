function finalScore(omr){
    let rightMark=omr.right;
    let wrongMark=omr.wrong;
    let skipMark =omr.skip;
    const sum =rightMark+wrongMark+skipMark;
    if(sum!==100){
        return "Invalid"
    }
   let cutMarks=wrongMark/2;
    const finalMarks =rightMark-cutMarks;
    return Math.round(finalMarks)

} 

  let output=finalScore({"right":67,"wrong":23,"skip":10})
console.log(output);
let output2 =finalScore({"right":80,"wrong":25,"skip":0})
console.log(output2);
