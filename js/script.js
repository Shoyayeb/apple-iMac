// getting price from html
const memoryCost = document.getElementById("memory-cost");
const storageCost = document.getElementById("storage-cost");
const deleveryCost = document.getElementById("delevery-cost");
const bestCost = document.getElementById("best-cost").innerText;
const totalCost = document.getElementById("total-cost");
const footerTotal = document.getElementById("footer-total");
// function to calculate and set price on website
function totalCalc(option, price) {
    option.innerText = price;
    const deleveryCostParsed = parseFloat(deleveryCost.innerText);
    const storageCostParsed = parseFloat(storageCost.innerText);
    const memoryCostParsed = parseFloat(memoryCost.innerText);
    const bestCostParsed = parseFloat(bestCost);
    total = bestCostParsed + memoryCostParsed + storageCostParsed + deleveryCostParsed;
    totalCost.innerText = total;
    footerTotal.innerText = total;
}
// memory price calculation
document.getElementById("8-memory").addEventListener("click", function () {
    totalCalc(memoryCost, 0);
})
document.getElementById("16-memory").addEventListener("click", function () {
    totalCalc(memoryCost, 180);
})
// storage price calculation
document.getElementById("256-ssd").addEventListener("click", function () {
    totalCalc(storageCost, 0);
})
document.getElementById("512-ssd").addEventListener("click", function () {
    totalCalc(storageCost, 100);
})
document.getElementById("1tb-ssd").addEventListener("click", function () {
    totalCalc(storageCost, 180);
})
// delevery price calculation
document.getElementById("free-delevery").addEventListener("click", function () {
    totalCalc(deleveryCost, 0);
})
document.getElementById("charge-delevery").addEventListener("click", function () {
    totalCalc(deleveryCost, 20);
})
// promo-code handling
document.getElementById("promo-apply").addEventListener("click", function () {
    const totalCostParsed = parseInt(totalCost.innerText);
    const promoCode = document.getElementById("promo-code").value;
    if (promoCode == "stevekaku") {
        const afterPromoPrice = totalCostParsed - (totalCostParsed * .20);
        totalCost.innerText = afterPromoPrice;
        footerTotal.innerText = afterPromoPrice;
        document.getElementById("promo-apply").disabled = true;
        document.getElementById("promo-code").disabled = true;
        document.getElementById("promo-apply").classList.remove("hover:bg-red-600")
        document.getElementById("promo-error").style.display = "none";
    } else {
        document.getElementById("promo-error").style.display = "block";
    }
    document.getElementById("promo-code").value = '';
})