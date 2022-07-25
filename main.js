const displayEl = document.getElementById("display")
let colors = ["red", "blue", "rebeccapurple", "lime", "yellow", "orange", "white"]
setInterval(updateTime, 1000)
setInterval(changeColor, 10000)

function updateTime(){
    let date = new Date()
    let s = date.getSeconds()
    let m = date.getMinutes()
    let h = date.getHours()
    s = format(s)
    m = format(m)
    h = format(h)
    displayEl.textContent = `${h}:${m}:${s}`    

    function format(e){
        return ("0"+e).length >2 ? e : ("0"+e)
    }
}

function changeColor(){
    let r = Math.floor(Math.random()*(colors.length))
    displayEl.style.color = `${colors[r]}`
}
