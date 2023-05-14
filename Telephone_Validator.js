function telephoneCheck(str) {
  const phoneRegEx = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/
  //^(1\s?) => optional 1 in the first place folowed by optional one white space
  //? => one time
  //(\(\d{3}\) => three numbers between parentecis
  //| => or
  //\d{3}) => three numbers
  //[-\s]? => optional "-" followed by one space
  //(\d{3}) => three numbers
  //[-\s]? => optional "-" followed by one space
  //(\d{4})$ => ending with four numbers
  return phoneRegEx.test(str);
}

console.log(telephoneCheck("1 555-555-5555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("1 (555) 555-5555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("5555555555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("555-555-5555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("(555)555-5555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("1(555)555-5555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("555-5555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("5555555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("1 555)555-5555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("1 555 555 5555") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("1 456 789 4444") === true ? "PASS" : "PASSN'T");
console.log(telephoneCheck("123**&!!asdf#") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("55555555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("(6054756961)") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("2 (757) 622-7382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("0 (757) 622-7382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("-1 (757) 622-7382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("2 757 622-7382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("10 (757) 622-7382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("27576227382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("(275)76227382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("2(757)6227382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("2(757)622-7382") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("555)-555-5555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("(555-555-5555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("(555)5(55?)-5555") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("55 55-55-555-5") === false ? "PASS" : "PASSN'T");
console.log(telephoneCheck("11 555-555-5555") === false ? "PASS" : "PASSN'T");