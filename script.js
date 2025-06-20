//error state

const submitBtn = document.getElementById('submit');
const mortgageAmount = document.getElementById('mortgageAmount');// first input
const mortgageTeam = document.getElementById('mortgageTeam'); // second input
const interestRate = document.getElementById('interestRate'); //third input
const monthlyPayment = document.getElementById('monthlyPayment');




submitBtn.addEventListener('click', function () {
    const euroSign = document.getElementById('euroSign');
    const year = document.getElementById('year');
    const percent = document.getElementById('percent');
    const repayment = document.getElementById('repayment');
    const interestOnly = document.getElementById('interestOnly');
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
 
    repaymentMethod()
});


//calculation


let result;


    function repaymentMethod() {
     let rate = interestRate.value.trim();
     const interestRateResult = (rate / 100) / 12;
     result = interestRateResult;
     monthlyPayment.textContent = `$${result}`;
}


