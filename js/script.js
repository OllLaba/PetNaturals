//TIMER

let time = 7200
const timer = document.getElementById('timer')
const timerMobile = document.getElementById('timerMobile')
setInterval(updatetimer, 1000)

function updatetimer(){
    const hours = Math.floor(time / 60 / 60) % 24
    let minutes = Math.floor(time / 60) % 60
    let seconds = time % 60
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    timer.innerHTML = `${hours}:${minutes}:${seconds}`
    timerMobile.innerHTML =`${hours}:${minutes}:${seconds}`
    if (timerMobile.style.color == "olive") {
      timerMobile.style.color = "white"
   } else {
    timerMobile.style.color = "olive"
   }
   time--
   if (hours < 0) {
    timer.innerHTML = `0:00:00`
    timerMobile.innerHTML = `0:00:00`
   }

  }

//MASK ТEL

document.addEventListener('DOMContentLoaded', () => {

    let inputTel = document.querySelector('input[type="tel"]') 
    const maskOptions = { // создаем объект параметров
      mask: '+{38}(\\000)000-00-00' // задаем единственный параметр mask
    }
    IMask(inputTel, maskOptions) // запускаем плагин с переданными параметрами
  
  })


  //DATE

  const data = document.getElementById('orderDate')
  let now = new Date().toLocaleString('ua',
  {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
  data.innerHTML = `<p>Order date: ${now}</p>`