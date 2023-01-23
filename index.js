const bill = document.getElementById("bill").value;
console.log(typeof ( bill));

const noOfPeople = document.getElementById("noofpeople").value;
console.log(noOfPeople);
const tipPerPersonPara = document.getElementById("tipperperson");
const totalPerPersonPara = document.getElementById("totalperperson");

const tipDiv = document.getElementById("tip");
const tipButtons = tipDiv.querySelectorAll(".btn");

tipButtons.forEach((btn) => {
    btn.addEventListener("click", function(){
        let tip = btn.textContent;
        console.log(tip);
        tipCalculator();
    })
})
 

function tipCalculator(){
    let tipPerPerson = (tip*bill)/noOfPeople;
    let totalPerPerson= tipPerPerson + (bill/noOfPeople);

console.log(tipPerPerson);

    tipPerPersonPara.innerHTML = tipPerPerson;
    totalPerPersonPara.innerHTML = totalPerPerson;
}

