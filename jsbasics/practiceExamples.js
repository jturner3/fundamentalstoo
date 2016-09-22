function Anubis (x, y, z) {
	var x = "You dont even";
	var y = "have a clue";
	var z = "about the power you possess!";
	console.log(x + " " + y + " " + z)
}

Anubis();


function bills(rent, water, electric, trash, wireless) {
	var totalBills = rent + water + electric + trash + wireless;
		return totalBills;
}

console.log("Bills:", bills(450, 150, 100, 75, 75));


//Gold Example Revealed

function calculatePrice (quantity, price, item, tax){
	var totalTax = (quantity * price * tax)
	var totalPrice = quantity * price + totalTax;
	return quantity + " " + item + " will cost you $" + totalPrice.toFixed(2);
}
console.log(calculatePrice(132, .88, "Cups of Coffee", 1.07));



