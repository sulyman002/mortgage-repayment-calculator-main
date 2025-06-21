//error state

const submitBtn = document.getElementById('submit');
const mortgageAmount = document.getElementById('mortgageAmount');// first input
const mortgageTeam = document.getElementById('mortgageTeam'); // second input
const interestRate = document.getElementById('interestRate'); //third input
const monthlyPayment = document.getElementById('monthlyPayment');
const yearlyPayment = document.getElementById('yearlyPayment');
const resultInfo = document.getElementById('resultInfo');
const preResult = document.getElementById('preResult');
const radio1 = document.querySelector('.radio1');
const radio2 = document.querySelector('.radio2');

const repayment = document.getElementById('repayment');
const interestOnly = document.getElementById('interestOnly');



submitBtn.addEventListener('click', function () {
    const euroSign = document.getElementById('euroSign');
    const year = document.getElementById('year');
    const percent = document.getElementById('percent');
    const radiosError = document.getElementById('radiosError');


    const interestRateError = document.getElementById('interestRateError');
    const mortgageAmountError = document.getElementById('mortgageAmountError');
    const mortgageTeamError = document.getElementById('mortgageTeamError');



    if (mortgageAmount.value.trim() === '') {
        mortgageAmountError.classList.remove('hidden');
        euroSign.style.backgroundColor = 'red';
        euroSign.style.color = '#fff'

    } else {
        mortgageAmountError.classList.add('hidden');
        euroSign.style.backgroundColor = '';
        euroSign.style.color = '';
    }

    if (mortgageTeam.value.trim() === '') {
        mortgageTeamError.classList.remove('hidden');
        year.style.backgroundColor = 'red';
        year.style.color = '#fff'
    } else {
        mortgageTeamError.classList.add('hidden');
        year.style.backgroundColor = '';
        year.style.color = '';
    }

    if (interestRate.value.trim() === '') {
        interestRateError.classList.remove('hidden');
        percent.style.backgroundColor = 'red';
        percent.style.color = '#fff'
    } else {
        interestRateError.classList.add('hidden');
        percent.style.backgroundColor = '';
        percent.style.color = '';
    }

    if (!repayment.checked && !interestOnly.checked) {
        radiosError.classList.remove('hidden');
    } else {
        radiosError.classList.add('hidden');
    }

    if(repayment.checked){
        repaymentMethod()
        radio1.style.backgroundColor = 'yellow'; // check on this later

    }else{
        ''
    }
    
    if(interestOnly.checked){
        interestOnlyMethod()
    }else{
        ''
    }

    if(monthlyPayment.textContent.includes('£') && yearlyPayment.textContent.includes('£')) {
        preResult.classList.add('hidden');
        resultInfo.classList.remove('hidden');
    }else{
        resultInfo.classList.add('hidden');
    }

    
});


//calculation


let resultMontly;
let resultYearly;


function repaymentMethod() {
    let rate = interestRate.value.trim();
    let mortgageT = mortgageTeam.value.trim();
    let mortgageA = mortgageAmount.value.trim();// p
    const interestRateResult = (rate / 100) / 12;//r
    const numberOfPayment = mortgageT * 12;//n
    resultMontly = mortgageA * (interestRateResult * (1 + interestRateResult) ** numberOfPayment) / ((1 + interestRateResult) ** numberOfPayment - 1);
    resultYearly = resultMontly * 300;
    monthlyPayment.textContent = `£${resultMontly.toFixed(2)}`;
    yearlyPayment.textContent = `£${resultYearly.toFixed(2)}`;
}

let resultMontlly;
let resultYearlly;

function interestOnlyMethod() {
    let rate = interestRate.value.trim();
    let mortgageA = mortgageAmount.value.trim();// p
    const interestRateResult = (rate / 100) / 12;//r
    resultMontlly = mortgageA * interestRateResult;
    resultYearlly = resultMontlly * 300;
    monthlyPayment.textContent = `£${resultMontlly.toFixed(2)}`;
    yearlyPayment.textContent = `£${resultYearlly.toFixed(2)}`;
    
}



//clear all
const clearAll = document.getElementById('clearAll');


clearAll.addEventListener('click', function(){
    mortgageAmount.value = '';
    mortgageTeam.value = '';
    interestRate.value = '';
    monthlyPayment.textContent = '';
    yearlyPayment.textContent = '';

});


