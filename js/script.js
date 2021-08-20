const bestCost = document.getElementById("best-cost");
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deleveryCost = document.getElementById("delevery-cost");
const totalCost = document.getElementById("total-cost");
const footerTotal = document.getElementById("footer-total");
// Parsed
const bestCostParsed = parseFloat(bestCost.innerText);
const totalCostParsed = parseFloat(bestCost.innerText);

// memory
document.getElementById("8-memory").addEventListener("click", function () {
    memoryCost.innerText = 0;
    const memoryCostParsed = parseFloat(memoryCost.innerText);
    total = memoryCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;

})
document.getElementById("16-memory").addEventListener("click", function () {
    memoryCost.innerText = 180;
    const memoryCostParsed = parseFloat(memoryCost.innerText);
    total = memoryCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;

})

// storage
document.getElementById("256-ssd").addEventListener("click", function () {
    storageCost.innerText = 0;
    const storageCostParsed = parseFloat(storageCost.innerText);
    total = storageCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;

})
document.getElementById("512-ssd").addEventListener("click", function () {
    storageCost.innerText = 100;
    const storageCostParsed = parseFloat(storageCost.innerText);
    total = storageCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;

})
document.getElementById("1tb-ssd").addEventListener("click", function () {
    storageCost.innerText = 180;
    const storageCostParsed = parseFloat(storageCost.innerText);
    total = storageCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;
})

// delevery
document.getElementById("free-delevery").addEventListener("click", function () {
    deleveryCost.innerText = 0;
    const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    total = deleveryCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;
})
document.getElementById("charge-delevery").addEventListener("click", function () {
    deleveryCost.innerText = 20;
    const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    total = deleveryCostParsed + totalCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;
})
