/*Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

ar resultDIV = '<li class="result">Multiples of 3 or 5 below 1000: <b>RESULT</b></li>';

var result = 0;
for(i=0;i<1000;i++){
	if (i%5===0 || i%3===0) result += i;
}

$("#answers").prepend(resultDIV.replace("RESULT", result));