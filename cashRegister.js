function checkCashRegister(price, cash, cid) {
	const bills = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1,
		FIVE: 5,
		TEN: 10,
		TWENTY: 20,
		'ONE HUNDRED': 100,
	};

	let changeDue = cash - price;
	let change = [];
	let totalCID = 0;

	for (let i = 0; i < cid.length; i++) {
		totalCID += cid[i][1];
	}

	if (totalCID < changeDue) {
		return { status: 'INSUFFICIENT_FUNDS', change: [] };
	} else if (totalCID === changeDue) {
		return { status: 'CLOSED', change: cid };
	} else {
		for (let i = cid.length - 1; i >= 0; i--) {
			let cashName = cid[i][0];
			let cashVal = bills[cashName];
			let cashTot = cid[i][1];
			let cashAmount = 0;

			while ((cashVal <= changeDue) & (cashTot > 0)) {
				changeDue -= cashVal;
				cashTot -= cashVal;
				cashAmount += cashVal;
				changeDue = Math.round(changeDue * 100) / 100;
			}
			if (cashAmount > 0) {
				change.push([cashName, cashAmount]);
			}
		}
		if (changeDue > 0) {
			return { status: 'INSUFFICIENT_FUNDS', change: [] };
		}
		return { status: 'OPEN', change: change };
	}
}

console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);
//{status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(
	checkCashRegister(3.26, 100, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);
//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.01],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 0],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);
//{status: "INSUFFICIENT_FUNDS", change: []}
console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.01],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 1],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);
//{status: "INSUFFICIENT_FUNDS", change: []}
console.log(
	checkCashRegister(19.5, 20, [
		['PENNY', 0.5],
		['NICKEL', 0],
		['DIME', 0],
		['QUARTER', 0],
		['ONE', 0],
		['FIVE', 0],
		['TEN', 0],
		['TWENTY', 0],
		['ONE HUNDRED', 0],
	])
);
//{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
