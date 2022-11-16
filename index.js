let MonData = document.querySelector(".monData")
let TueData = document.querySelector(".tueData")
let WedData = document.querySelector(".WedData")
let ThuData = document.querySelector(".thuData")
let FriData = document.querySelector(".friData")
let SatData = document.querySelector(".satData")
let SunData = document.querySelector(".sunData")


var Days = document.getElementsByClassName("days")
 for (let i = 0; i < Days.length; i++) {
    Days[i].addEventListener("mouseover", showData)
  }

    function showData () {
  let Box = document.querySelectorAll(".boxbody")
      for (boxbody in Box) {
        Box[boxbody].onmouseover = function () {
          var goop = document.querySelectorAll(".data")
          for( let i = 0; i < goop.length; i++)
          goop[i].style.display = "block"
        }
      }
  }
    


fetch("data.json")
.then(res => res.json())
.then(data => {
  MonData.innerHTML = data[0].amount
  TueData.innerHTML = data[1].amount
  WedData.innerHTML = data[2].amount
  ThuData.innerHTML = data[3].amount
  FriData.innerHTML = data[4].amount
  SatData.innerHTML = data[5].amount
  SunData.innerHTML = data[6].amount
})
