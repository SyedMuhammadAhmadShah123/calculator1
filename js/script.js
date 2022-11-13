
let outputScreen = document.getElementById("calculator__display")
let count = 0;
function display(num){
    // console.log(count)
    if(outputScreen.innerHTML == 0){
        outputScreen.innerHTML = num
    }
    else if(count < 22){
        outputScreen.innerHTML += num
        count++
        // console.log(count)
    }
}
function Calculate(num){
    try{
        outputScreen.innerHTML = eval(outputScreen.innerHTML)
    }
    catch(err){
        alert("Invalid Input")
    }
}
function Clear(){
    outputScreen.innerHTML="0"
}
function del(){
    if(outputScreen.innerHTML.length == 1){
    outputScreen.innerHTML = 0
    }
    if(outputScreen.innerHTML.length > 1){
    outputScreen.innerHTML = outputScreen.innerHTML.slice(0,-1)
    }
}
