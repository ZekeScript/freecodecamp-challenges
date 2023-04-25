function convertToRoman(num) {
  const romanNumerals = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let convertNumber = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i][0]) {
      convertNumber += romanNumerals[i][1];
      num -= romanNumerals[i][0];
    };
  };
  return convertNumber;
};

console.log('III' == convertToRoman(3));
console.log('IV' == convertToRoman(4));
console.log('V' == convertToRoman(5));
console.log('IX' == convertToRoman(9));
console.log('XII' == convertToRoman(12));
console.log('XVI' == convertToRoman(16));
console.log('XXIX' == convertToRoman(29));
console.log('XLIV' == convertToRoman(44));
console.log('XLV' == convertToRoman(45));
console.log('LXVIII' == convertToRoman(68));
console.log('LXXXIII' == convertToRoman(83));
console.log('XCVII' == convertToRoman(97));
console.log('XCIX' == convertToRoman(99));
console.log('CD' == convertToRoman(400));
console.log('D' == convertToRoman(500));
console.log('DI' == convertToRoman(501));
console.log('DCXLIX' == convertToRoman(649));
console.log('DCCXCVIII' == convertToRoman(798));
console.log('DCCCXCI' == convertToRoman(891));
console.log('M' == convertToRoman(1000));
console.log('MIV' == convertToRoman(1004));
console.log('MVI' == convertToRoman(1006));
console.log('MXXIII' == convertToRoman(1023));
console.log('MMXIV' == convertToRoman(2014));
console.log('MMMCMXCIX' == convertToRoman(3999));
