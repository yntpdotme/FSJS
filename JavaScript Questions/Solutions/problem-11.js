/*
11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
	- 4 > 3         True
	- 4 >= 3        True
	- 4 < 3         False
	- 4 <= 3        False
	- 4 == 4        True    
	- 4 === 4       True
	- 4 != 4        False
	- 4 !== 4       Error* --> False
	- 4 != '4'      True* --> False
	- 4 == '4'      True
	- 4 === '4'     False
	- Find the length of python and jargon and make a falsy comparison statement. 
	*/

console.log(`

	4 > 3 is  ${4 > 3}
	4 >= 3 is  ${4 >= 3}
	4 < 3 is  ${4 < 3}
	4 <= 3 is  ${4 <= 3}
	4 == 4 is  ${4 == 4}
	4 === 4 is  ${4 === 4}
	4 != 4 is  ${4 != 4}
	4 !== 4 is  ${4 !== 4}
	4 !== '4' is  ${4 !== 4}
	4 == '4' is  ${4 == "4"}
	4 === '4' is   ${4 === "4"}
`);

let text1 = "python";
let text2 = "jargon";

console.log(text1.length != text2.length);
