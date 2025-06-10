// const clock = document.getElementById('clock')



setInterval(function (){
let date = new Date()
clock.innerHTML = date.toLocaleTimeString()
},1000) // changed th etime in every one second