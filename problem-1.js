function newPrice(currentPrice, discount) {
    if(typeof currentPrice !=="number" || discount !== "number"||discount<0 || discount>100 ){
       return "Invalid"

    }else{
            let discountedPrice= (currentPrice*discount)/100;
            let payAmount=(currentPrice-discountedPrice).toFixed(3);
            return payAmount;

    }

}

let output=newPrice(1200,["hi"]);
console.log(output);
