
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deleveryCost = document.getElementById("delevery-cost");
const bestCost = document.getElementById("best-cost").innerText;
const totalCost = document.getElementById("total-cost");
function totalCalc(option, price) {
    const footerTotal = document.getElementById("footer-total");
    option.innerText = price;
    const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    const storageCostParsed = parseFloat(storageCost.innerText);
    const memoryCostParsed = parseFloat(memoryCost.innerText);
    const bestCostParsed = parseFloat(bestCost);
    total = bestCostParsed + memoryCostParsed + storageCostParsed + deleveryCostParsed;
    console.log(bestCostParsed);
    console.log(memoryCostParsed);
    console.log(storageCostParsed);
    console.log(deleveryCostParsed);
    console.log(total);
    totalCost.innerText = total;
    footerTotal.innerText = total;
}
// memory
document.getElementById("8-memory").addEventListener("click", function () {
    totalCalc(memoryCost, 0);
})
document.getElementById("16-memory").addEventListener("click", function () {
    totalCalc(memoryCost, 180);
})
// storage
document.getElementById("256-ssd").addEventListener("click", function () {
    totalCalc(storageCost, 0);
})
document.getElementById("512-ssd").addEventListener("click", function () {
    totalCalc(storageCost, 100);
})
document.getElementById("1tb-ssd").addEventListener("click", function () {
    totalCalc(storageCost, 180);
})
// delevery
document.getElementById("free-delevery").addEventListener("click", function () {
    totalCalc(deleveryCost, 0);
})
document.getElementById("charge-delevery").addEventListener("click", function () {
    totalCalc(deleveryCost, 20);
})
