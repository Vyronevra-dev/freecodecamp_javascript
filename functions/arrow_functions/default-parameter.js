const calculateTotal = (amount, taxRate = 0.05) => {
        return amount + (amount * taxRate);
};

console.log(calculateTotal(100));
