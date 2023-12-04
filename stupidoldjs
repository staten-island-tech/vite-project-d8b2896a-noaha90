import "../styles/style.css"
import { array } from "./array"


const DOMSelectors = {
  box: document.getElementsByClassName("box"),
  theme: document.querySelector(".theme"),
  washington: document.querySelector(".washington"),
  fight: document.querySelector(".fight"),
  price: document.querySelector(".price"),
  whalen: document.querySelector(".whalen"),
  restore: document.querySelector(".restore"),
  container: document.getElementsByClassName("container"),
};

const boxarray = Array.from(DOMSelectors.box)
let oldBoxArray = boxarray

DOMSelectors.theme.addEventListener("click", function(event) {
  theme()
})

console.log(DOMSelectors.price)
DOMSelectors.price.addEventListener("click", function(event) {
  restoreBoxes();
  priceCheck();
  themeReset();
})

DOMSelectors.washington.addEventListener("click", function(event) {
  restoreBoxes();
  wash();
  themeReset();
})

DOMSelectors.whalen.addEventListener("click", function(event) {
  restoreBoxes();
  bestDollar();
  themeReset()
})



DOMSelectors.fight.addEventListener("click", function(event) {
  console.log(DOMSelectors.fight)
  restoreBoxes();
  fightCheck();
  themeReset()
})


DOMSelectors.restore.addEventListener("click", function(event) {
  restoreBoxes()
  themeReset()
})

function themeReset(){
  theme()
  theme()
}
      
      

function invert(){
  const boxarray = Array.from(DOMSelectors.box)
  const cArray = Array.from(DOMSelectors.container)
  cArray.forEach(container =>{
      container.classList.add("containerI")
      container.classList.remove("containerM")
  })
  boxarray.forEach(box => {
      box.classList.add("boxI")
      box.classList.remove("boxM")
      document.body.classList.remove("main")
      document.body.classList.add("invert")
})
}

function main(){
  const boxarray = Array.from(DOMSelectors.box)
  const cArray = Array.from(DOMSelectors.container)
  cArray.forEach(container =>{
      container.classList.add("containerM")
      container.classList.remove("containerI")
  })
  boxarray.forEach(box => {
      box.classList.add("boxM")
      box.classList.remove("boxI")
      document.body.classList.remove("invert")
      document.body.classList.add("main")
})
}



function wash(){
boxarray.forEach(box => {
  let index = boxarray.indexOf(box)
  if(array[index].president == "N"){
    console.log(array[index].name)
  box.remove()
}
})

}


function priceCheck(){
  boxarray.forEach(box => {
    let index = boxarray.indexOf(box)
    console.log(array[index].price)
    if(array[index].price < 50){
      console.log(array[index].name)
    box.remove()
  }
  })
  
  }


function bestDollar(){
  boxarray.forEach(box => {
    let index = boxarray.indexOf(box)
    if(array[index].name != "Whalen"){
      console.log(array[index].name)
    box.remove()
  }
  })
  
  }
  

  function fightCheck(){
    boxarray.forEach(box => {
      let index = boxarray.indexOf(box)
      if(array[index].fight == "N"){
        console.log(array[index].name)
      box.remove()
    }
    })
    
    }


function restoreBoxes(){
  boxarray.forEach(box => {
    box.remove()
  })
  oldBoxArray.forEach(box => {
    document.querySelector(".container").insertAdjacentElement(
      "beforeend",
      box
  );
  }
  )
  }


  function theme(){
    if(document.body.classList.contains("main")){
      invert()
      }
      else{      
          main()
          }
  }
