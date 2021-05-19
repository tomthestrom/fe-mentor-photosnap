const priceToggleEl = document.querySelector("[data-price-toggle]");
const priceValueEl = document.querySelectorAll("[data-price-value]");
const priceLabelEl = document.querySelectorAll("[data-price-label]");

const updatePlanCards = (isPriceForYear) => {
  priceValueEl.forEach((element) => {
    element.innerHTML = isPriceForYear
      ? element.dataset.priceValueYear
      : element.dataset.priceValueMonth;
  });

  priceLabelEl.forEach((element) => {
    element.innerHTML = isPriceForYear
      ? element.dataset.priceLabelYear
      : element.dataset.priceLabelMonth;
  });
};

(function () {
    updatePlanCards(priceToggleEl.checked)
})();

priceToggleEl.addEventListener("change", (e) => {
    updatePlanCards(e.target.checked)
});
