function changeCurrency() {
    const currencySelect = document.getElementById('currency');
    const currencySymbol = currencySelect.value;

    const priceElements = document.querySelectorAll('.price');
    const priceYearlyElements = document.querySelectorAll('.price-yearly');

    priceElements.forEach(element => {
        const monthlyPrice = element.textContent.split('/')[0];
        element.textContent = `${currencySymbol}${monthlyPrice}/month`;
    });

    priceYearlyElements.forEach(element => {
        const yearlyPrice = element.textContent.split('/')[0];
        element.textContent = `${currencySymbol}${yearlyPrice}/year`;
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.createElement('label');
    toggleSwitch.className = 'switch';

    const inputSwitch = document.createElement('input');
    inputSwitch.type = 'checkbox';
    inputSwitch.id = 'toggleSwitch';
    inputSwitch.addEventListener('change', togglePricing);

    const slider = document.createElement('span');
    slider.className = 'slider round';

    toggleSwitch.appendChild(inputSwitch);
    toggleSwitch.appendChild(slider);

    const container = document.querySelector('.currency-toggle');
    container.appendChild(document.createElement('br')); 
    container.appendChild(toggleSwitch);

    function togglePricing() {
        const monthlyElements = document.querySelectorAll('.price');
        const yearlyElements = document.querySelectorAll('.price-yearly');

        if (inputSwitch.checked) {
            monthlyElements.forEach(element => {
                element.style.display = 'none';
            });

            yearlyElements.forEach(element => {
                element.style.display = 'block';
            });
        } else {
            monthlyElements.forEach(element => {
                element.style.display = 'block';
            });

            yearlyElements.forEach(element => {
                element.style.display = 'none';
            });
        }
    }
});
