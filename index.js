const bill = parseInt(document.getElementById("bill").value);
const noOfPeople = parseInt(document.getElementById("noofpeople").value);
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

        if(noOfPeople <= 0){
            tipPerPersonPara.innerHTML = "$0.00";
            totalPerPersonPara.innerHTML = "$0.00";
            document.getElementById("people").classList.add("nopeople");
        }
    })
})
 
