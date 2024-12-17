document.getElementById('convert-btn').addEventListener('click', function() {
    const num = parseInt(document.getElementById('number').value);  // here we Get the input value
    const outputElement = document.getElementById('output');
    
    if (isNaN(num)) {  // here i Check if the input is not a number
        outputElement.textContent = "Please enter a valid number";
    } else if (num < 1) {  // to Handle numbers less than 1
        outputElement.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {  //to Handle numbers greater than or equal to 4000
        outputElement.textContent = "Please enter a number less than or equal to 3999";
    } else {
        outputElement.textContent = convertToRoman(num);  // Convert and display the Roman numeral
    }
});

// Here is Function to convert number to Roman numerals
function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    
    let roman = '';
    
    // To Loop through each numeral and reduce the number until fully converted
    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            roman += numeral.symbol;
            num -= numeral.value;
        }
    }
    
    return roman;  // and then Return the final Roman numeral
}