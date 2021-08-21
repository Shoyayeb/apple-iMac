
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deleveryCost = document.getElementById("delevery-cost");

// Parsed
// function
function totalCalc(option, price) {
    const bestCost = document.getElementById("best-cost").innerText;
    // 
    const bestCostParsed = parseFloat(bestCost);
    const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    const storageCostParsed = parseFloat(storageCost.innerText);
    const memoryCostParsed = parseFloat(memoryCost.innerText);
    // 
    const footerTotal = document.getElementById("footer-total");
    const totalCost = document.getElementById("total-cost");
    const totalCostParsed = parseFloat(totalCost.innerText);
    const cost = parseFloat(option.innerText);
    option.innerText = price;
    // console.log(option);
    // console.log(price);
    // option.innerText = price;
    // console.log(bestCostParsed);
    // console.log(storageCostParsed);
    // console.log(memoryCostParsed);
    // console.log(deleveryCostParsed);
    total = bestCostParsed + memoryCostParsed + storageCostParsed + deleveryCostParsed;
    console.log(total);
    totalCost.innerText = total;
    footerTotal.innerText = total;
}
// memory
document.getElementById("8-memory").addEventListener("click", function () {
    // memoryCost.innerText = 0;
    // const memoryCostParsed = parseFloat(memoryCost.innerText);
    // total = memoryCostParsed + totalCostParsed;
    totalCalc(memoryCost, 0);

})
document.getElementById("16-memory").addEventListener("click", function () {
    // memoryCost.innerText = 180;
    // const memoryCostParsed = parseFloat(memoryCost.innerText);
    // total = memoryCostParsed + totalCostParsed;
    totalCalc(memoryCost, 180);


})

// storage
document.getElementById("256-ssd").addEventListener("click", function () {
    // storageCost.innerText = 0;
    // const storageCostParsed = parseFloat(storageCost.innerText);
    // total = storageCostParsed + totalCostParsed;
    totalCalc(storageCost, 0);


})
document.getElementById("512-ssd").addEventListener("click", function () {
    // storageCost.innerText = 100;
    // const storageCostParsed = parseFloat(storageCost.innerText);
    // total = storageCostParsed + totalCostParsed;
    totalCalc(storageCost, 100);


})
document.getElementById("1tb-ssd").addEventListener("click", function () {
    // storageCost.innerText = 180;
    // const storageCostParsed = parseFloat(storageCost.innerText);
    // total = storageCostParsed + totalCostParsed;
    totalCalc(storageCost, 180);


})

// delevery
document.getElementById("free-delevery").addEventListener("click", function () {
    // deleveryCost.innerText = 0;
    // const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    // total = deleveryCostParsed + totalCostParsed;
    totalCalc(deleveryCost, 0);

})
document.getElementById("charge-delevery").addEventListener("click", function () {
    // deleveryCost.innerText = 20;
    // const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    // total = deleveryCostParsed + totalCostParsed;
    totalCalc(deleveryCost, 20);
})
