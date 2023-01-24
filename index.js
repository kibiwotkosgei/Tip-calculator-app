const bill = parseInt(document.getElementById("bill").value);
console.log(typeof ( bill));

const noOfPeople = parseInt(document.getElementById("noofpeople").value);
console.log(typeof noOfPeople);
const tipPerPersonPara = document.getElementById("tipperperson");
const totalPerPersonPara = document.getElementById("totalperperson");

const tipDiv = document.getElementById("tip");
const tipButtons = tipDiv.querySelectorAll(".btn");

tipButtons.forEach((btn) => {
    btn.addEventListener("click", function(){
        let tip = parseInt(btn.textContent);
        let tipPerPerson = (tip/100*bill)/noOfPeople;
        let totalPerPerson= tipPerPerson + (bill/noOfPeople);
        tipPerPersonPara.innerHTML = tipPerPerson;
        totalPerPersonPara.innerHTML = totalPerPerson;
    })
})
 

console.log("I am testing");

