// You Don't Know JS: Up and Going
// Chapter 1 Practice example

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bankAccount = prompt("How much do you have to spend?");

function calcTaxes(amount){
	return amount * TAX_RATE;
}

function formatCurrency(amount){
	return "$" + amount.toFixed(2);
}

var subtotal = PHONE_PRICE + ACCESSORY_PRICE;
var price = subtotal + calcTaxes(subtotal);

var quantity = 0;
if (price > bankAccount) {
	console.log("You cannot afford this!")
}
	else while (price < bankAccount) {
		bankAccount = bankAccount - price;
		quantity = quantity + 1;
}

bankAccount = formatCurrency(bankAccount);
price = formatCurrency(price*i);
console.log(i+" phones purchased with accessories, totaling "+ price);
console.log("Balance left in checking: "+bankAccount);
