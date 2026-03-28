




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax (amount) {
    return amount * 0.10
}
function convertToUpperCase (text) {
    return text.toUpperCase() 
}
function findMaximum (num1, num2) {
    return num1 > num2 ? num1 : num2
} 
function isPalindrome (word) {
    const normalized = word.toLowerCase()
    const reversed = normalized.split ('').reverse().join('')
    return normalized === reversed
}
function calculateDiscountedPrice (originalPrice, discountedpercentage) {
    const discountAmount = originalPrice * (discountedpercentage /100)
    return originalPrice - discountAmount
} 