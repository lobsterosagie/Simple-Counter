const input = document.querySelector("input")
const counter = document.querySelector("#counter")
    let value = 0
    counter.innerHTML=value
    function increaseCounter(){
        if (input.value.length != 0) {
            value += Math.abs(Number(input.value))
            counter.innerHTML = value
        }
        else {
            value++
            counter.innerHTML = value
        }
        
    }
    function resetCounter(){
        value = 0
        counter.innerHTML=value
        input.value = ""
    }
    function decreaseCounter(){
        if (input.value.length != 0) {
            value -= Math.abs(Number(input.value))
            counter.innerHTML = value
        }
        else {
            value--
            counter.innerHTML = value
        }
    }