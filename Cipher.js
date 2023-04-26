function rot13(str) {
	const cipher = {
		A: 'N',
		B: 'O',
		C: 'P',
		D: 'Q',
		E: 'R',
		F: 'S',
		G: 'T',
		H: 'U',
		I: 'V',
		J: 'W',
		K: 'X',
		L: 'Y',
		M: 'Z',
		N: 'A',
		O: 'B',
		P: 'C',
		Q: 'D',
		R: 'E',
		S: 'F',
		T: 'G',
		U: 'H',
		V: 'I',
		W: 'J',
		X: 'K',
		Y: 'L',
		Z: 'M',
	};
  
  return str.split('').map(word => word in cipher ? cipher[word] : word).join('');
}

console.log(rot13('SERR PBQR PNZC') == 'FREE CODE CAMP');
console.log(rot13('SERR CVMMN!') == 'FREE PIZZA!');
console.log(rot13('SERR YBIR?') == 'FREE LOVE?');
console.log(
	rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') ==
		'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
);
