// https://calculator.swiftutors.com/asset-growth-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const assetGrowthRateRadio = document.getElementById('assetGrowthRateRadio');
const earlyPricePointRadio = document.getElementById('earlyPricePointRadio');
const laterPricePointRadio = document.getElementById('laterPricePointRadio');

let assetGrowthRate;
let earlyPricePoint = v1;
let laterPricePoint = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

assetGrowthRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Early Price Point ($)';
  variable2.textContent = 'Later Price Point ($)';
  earlyPricePoint = v1;
  laterPricePoint = v2;
  result.textContent = '';
});

earlyPricePointRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Growth Rate (%)';
  variable2.textContent = 'Later Price Point ($)';
  assetGrowthRate = v1;
  laterPricePoint = v2;
  result.textContent = '';
});

laterPricePointRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Growth Rate (%)';
  variable2.textContent = 'Early Price Point ($)';
  assetGrowthRate = v1;
  earlyPricePoint = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(assetGrowthRateRadio.checked)
    result.textContent = `Asset Growth Rate = ${computeAssetGrowthRate().toFixed(2)} %`;

  else if(earlyPricePointRadio.checked)
    result.textContent = `Early Price Point = ${computeEarlyPricePoint().toFixed(2)} $`;

  else if(laterPricePointRadio.checked)
    result.textContent = `Later Price Point = ${computeLaterPricePoint().toFixed(2)} $`;
})

// calculation

function computeAssetGrowthRate() {
  return ((Number(laterPricePoint.value) - Number(earlyPricePoint.value)) / Number(earlyPricePoint.value)) * 100;
}

function computeEarlyPricePoint() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeLaterPricePoint() {
  return ((Number(assetGrowthRate.value) / 100) * Number(earlyPricePoint.value)) + Number(earlyPricePoint.value);
}