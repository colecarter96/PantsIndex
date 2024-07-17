// Example for handling multiple sliders

document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-container');

    sliders.forEach((slider, index) => {
        const sliderLower = slider.querySelector('.slider-lower');
        const sliderUpper = slider.querySelector('.slider-upper');
        const valueLower = slider.nextElementSibling.querySelector('.value-lower');
        const valueUpper = slider.nextElementSibling.querySelector('.value-upper');

        function updateValues() {
            let lowerValue = parseFloat(sliderLower.value);
            let upperValue = parseFloat(sliderUpper.value);

            if (lowerValue >= upperValue) {
                lowerValue = upperValue - 0.5;
                sliderLower.value = lowerValue;
            }

            if (upperValue <= lowerValue) {
                upperValue = lowerValue + 0.5;
                sliderUpper.value = upperValue;
            }

            valueLower.textContent = lowerValue.toFixed(1);
            valueUpper.textContent = upperValue.toFixed(1);
        }

        sliderLower.addEventListener('input', updateValues);
        sliderUpper.addEventListener('input', updateValues);

        updateValues();
    });
});