function maxProfit(prices){
    let max = 0;

    for (let i = 0; i<prices.length - 2 ; i++){
        for (let j =i+1; j<prices.length -1; j++){
            currentprofit = prices[j] - prices[i];
            //console.log("current pro of " + i , j + " = " , currentprofit);
            if(currentprofit > max){
                max = currentprofit;
            }
        }
    }

    console.log("max profit = ", max);
}

let prices = [7,1,5,3,6,4];
//let prices = [7,6,4,3,1];
maxProfit(prices);

//time complexity = 0(n^2)
//space complexity = 0(n+1)