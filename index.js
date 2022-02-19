let inputValue =document.getElementById("main-input")
let fiveBtn = document.getElementById("5%-btn")
let tenBtn = document.getElementById("10%-btn")
let fifteenBtn = document.getElementById("15%-btn")
let twentyFiveBtn = document.getElementById("25%-btn")
let fiftyBtn = document.getElementById("50%-btn")
let tipAmount = document.getElementById("tip-amount")
let totalBill = document.getElementById("total-tip")
let peopleInput = document.getElementById("people-input")
let resetBtn = document.getElementById("reset-btn")
let customInput = document.getElementById("custom-input")
let resetBtnOn = false
let theBill = 0.0
let peopleValue = 1
let customValue = 0
inputValue.value = ""
peopleInput.value = ""
customInput.value = ""
tipAmount.innerText = `$0.00`

inputValue.addEventListener("input", function (){
    
    theBill = parseFloat(inputValue.value)
    console.log (theBill + "ini")
})
peopleInput.addEventListener("input", function(){
    peopleValue = peopleInput.value
    console.log(peopleInput.value)
})
customInput.addEventListener("input", function(){
    customValue = customInput.value
    console.log(customInput.value)
    let customTip = ((theBill * customValue) / 100) / peopleValue
    customTip = Math.trunc(customTip * Math.pow(10,2)) / Math.pow(10,2)
    let customBill = (theBill / peopleValue) + customTip
    customBill =Math.trunc(customBill * Math.pow(10,2)) / Math.pow(10,2)
    totalBill.innerText = `$${customBill}`
    tipAmount.innerText = `$${customTip}`
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.color = "white"
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    tenBtn.style.color = "white"
    fifteenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenBtn.style.color = "white"
    twentyFiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyFiveBtn.style.color = "white"
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyBtn.style.color = "white"
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.cursor = "pointer"
    if (customTip === 0.0){
        tipAmount.innerText = `$0.00`
    }
    if (customBill === 0.0){
       totalBill.innerText = `$0.00`
    }
    resetBtnOn = true
})




fiveBtn.addEventListener("click",function() {
    let fiveTip = ((theBill * 5) / 100) / peopleValue
    fiveTip = Math.trunc(fiveTip*Math.pow(10,2)) / Math.pow(10,2)
    let fiveBill = (theBill / peopleValue) + fiveTip
    fiveBill =Math.trunc(fiveBill*Math.pow(10,2)) / Math.pow(10,2)
    fiveBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    fiveBtn.style.color = "hsl(183, 100%, 15%)"
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    tenBtn.style.color = "white"
    fifteenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenBtn.style.color = "white"
    twentyFiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyFiveBtn.style.color = "white"
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyBtn.style.color = "white"
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.cursor = "pointer"
    totalBill.innerText = `$${fiveBill}`
    tipAmount.innerText = `$${fiveTip}`
    customInput.value = ""
    if (theBill === 0.0){
        totalBill.innerText = `$0.00`
        tipAmount.innerText = `$0.00`
    }
    
    resetBtnOn = true
    console.log(theBill)
    console.log(peopleInput.value + "ini")
    console.log(peopleValue + "ini")
}) 
tenBtn.addEventListener("click",function() {
    let tenTip = ((theBill * 10) / 100) / peopleValue
    tenTip =Math.trunc(tenTip*Math.pow(10,2)) / Math.pow(10,2)
    let tenBill = (theBill / peopleValue) + tenTip
    tenBill = Math.trunc(tenBill*Math.pow(10,2)) / Math.pow(10,2)
    tenBtn.style.color = "hsl(183, 100%, 15%)"
    tenBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.color = "white"
    fifteenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenBtn.style.color = "white"
    twentyFiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyFiveBtn.style.color = "white"
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyBtn.style.color = "white"
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.cursor = "pointer"
    totalBill.innerText = `$${tenBill}`
    tipAmount.innerText =`$${tenTip}`
    customInput.value = ""
    if (theBill === 0.0){
        totalBill.innerText = `$0.00`
        tipAmount.innerText = `$0.00`
    }
    resetBtnOn = true
}) 
fifteenBtn.addEventListener("click",function() {
    let fifteenTip = ((theBill * 15) / 100) / peopleValue
    fifteenTip =Math.trunc(fifteenTip*Math.pow(10,2)) / Math.pow(10,2)
    let fifteenBill = (theBill / peopleValue) + fifteenTip
    fifteenBill =Math.trunc(fifteenBill*Math.pow(10,2)) / Math.pow(10,2)
    fifteenBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    fifteenBtn.style.color = "hsl(183, 100%, 15%)"
    tenBtn.style.color = "white"
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.color = "white"
    twentyFiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyFiveBtn.style.color = "white"
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyBtn.style.color = "white"
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.cursor = "pointer"
    totalBill.innerText = `$${fifteenBill}`
    tipAmount.innerText =`$${fifteenTip}`
    customInput.value = ""
    if (theBill === 0.0){
        totalBill.innerText = `$0.00`
        tipAmount.innerText = `$0.00`
    }
    resetBtnOn = true
}) 
twentyFiveBtn.addEventListener("click",function() {
    let twentyFiveTip = ((theBill * 25) / 100) / peopleValue
    twentyFiveTip =Math.trunc(twentyFiveTip*Math.pow(10,2)) / Math.pow(10,2)
    let twentyFiveBill = (theBill / peopleValue) + twentyFiveTip
    twentyFiveBill =Math.trunc(twentyFiveBill*Math.pow(10,2)) / Math.pow(10,2)
    twentyFiveBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    twentyFiveBtn.style.color = "hsl(183, 100%, 15%)"
    fifteenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenBtn.style.color = "white"
    tenBtn.style.color = "white"
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.color = "white"
    fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiftyBtn.style.color = "white"
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.cursor = "pointer"
    totalBill.innerText = `$${twentyFiveBill}`
    tipAmount.innerText =`$${twentyFiveTip}`
    customInput.value = ""
    if (theBill === 0.0){
        totalBill.innerText = `$0.00`
        tipAmount.innerText = `$0.00`
    }
    resetBtnOn = true
}) 
fiftyBtn.addEventListener("click",function() {
    let fiftyTip = ((theBill * 50) / 100) / peopleValue
    fiftyTip =Math.trunc(fiftyTip*Math.pow(10,2)) / Math.pow(10,2)
    let fiftyBill = (theBill / peopleValue) + fiftyTip
    fiftyBill =Math.trunc(fiftyBill*Math.pow(10,2)) / Math.pow(10,2)
    fiftyBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    fiftyBtn.style.color = "hsl(183, 100%, 15%)"
    fifteenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fifteenBtn.style.color = "white"
    tenBtn.style.color = "white"
    tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    fiveBtn.style.color = "white"
    twentyFiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
    twentyFiveBtn.style.color = "white"
    resetBtn.style.backgroundColor = "hsl(172, 67%, 45%)"
    resetBtn.style.cursor = "pointer"
    totalBill.innerText = `$${fiftyBill}`
    tipAmount.innerText =`$${fiftyTip}`
    customInput.value = ""
    if (theBill === 0.0){
        totalBill.innerText = `$0.00`
        tipAmount.innerText = `$0.00`
    }
    resetBtnOn = true
}) 

resetBtn.addEventListener("click", function(){
    resetBtn.style.backgroundColor = "hsl(185, 82%, 24%)"
    
    if (resetBtnOn === true) {
        console.log("is it work?")
        fiftyBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
        fiftyBtn.style.color = "white"
        fifteenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
        fifteenBtn.style.color = "white"
        tenBtn.style.color = "white"
        tenBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
        fiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
        fiveBtn.style.color = "white"
        twentyFiveBtn.style.backgroundColor = "hsl(183, 100%, 15%)"
        twentyFiveBtn.style.color = "white"
        resetBtnOn = false
        document.location.reload(true)
    }
})
