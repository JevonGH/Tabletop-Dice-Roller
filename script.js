let sum = 0;
let results = [];

function rollD20() {
	let d20 = Math.floor(Math.random()*20+1) + Number(document.getElementById("diceModifier").value);
  sum += d20;
  results.push(d20);
  diceResult.innerHTML = results;
  diceSum.innerHTML = sum;
};

function rollD12() {
	let d12 = Math.floor(Math.random()*12+1) + Number(document.getElementById("diceModifier").value);
 	 sum += d12;
  results.push(d12);
  diceResult.innerHTML = results;
  diceSum.innerHTML = sum;
};

function rollD10() {
	let d10 = Math.floor(Math.random()*10+1) + Number(document.getElementById("diceModifier").value);
 	sum += d10;
  results.push(d10);
  diceResult.innerHTML = results;
  diceSum.innerHTML = sum;
};

function rollD8() {
	let d8 = Math.floor(Math.random()*8+1) + Number(document.getElementById("diceModifier").value);
 	sum += d8;
  results.push(d8);
  diceResult.innerHTML = results;
  diceSum.innerHTML = sum;
};

function rollD6() {
	let d6 = Math.floor(Math.random()*6+1) + Number(document.getElementById("diceModifier").value);
 	sum += d6;
  results.push(d6);
  diceResult.innerHTML = results;
  diceSum.innerHTML = sum;
};

function rollD4() {
	let d4 = Math.floor(Math.random()*4+1) + Number(document.getElementById("diceModifier").value);
 	sum += d4;
  results.push(d4);
  diceResult.innerHTML = results;
  diceSum.innerHTML = sum;
};

function reset() {
  document.getElementById("diceModifier").value = "0";
  results = [];
  diceResult.innerHTML = results;
  sum = 0;
  diceSum.innerHTML = sum;
}